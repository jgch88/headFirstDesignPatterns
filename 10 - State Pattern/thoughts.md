This chapter is actually an example of refactoring a code smell into a design pattern, followed by
"agile" feature request implementation?

When a change request comes in, the state pattern makes it much easier to
make modifications to behaviour by extending (subclassing) affected State classes
and extending the Context class (Open-Closed principle).

(Will we end up with multiple "old", unused versions of the original parent Context/State classes which
we will eventually merge back instead of extending? It might be easier than having to open multiple files.)
--EDIT--
After working through the refill() exercise, it's probably prudent to know WHEN to modify and WHEN to extend,
instead of ALWAYS extending modules. I think it's cleaner to not have V1,V2,V3 files lying everywhere (and
isn't that what the version control system is for?) and having multiple levels of inheritance, 
we probably should have just ONE file for each State. Perhaps this tension is also something to recognise
in clean code and refactoring. By definition feature requests are additional "responsibilities", so how do we
balance the Single Responsibility Principle and the Open Closed Principle? Do we extend? Do we modify? Are we
supposed to refactor out more classes? In the State Pattern, it seems like the "single reason" for the Context class
to change is when TRANSITIONS (the _arrows_ that point from state to state) are changed/added. If you think about it
refill() is a new API feature to be added to this Context, and we're trying to abstract away what refill() does from
the requestor, like 'magic'.

Meanwhile, the "single reason" for the State classes to change is when basic behaviours are changed within each State (adding refill() is one, 
perhaps changing ejectQuarter() is another). 
ADDITIONALLY  the State responsible for the TRANSITION to neighbouring states must be changed (compare turnCrank() in HasQuarterState and HasQuarterStateV2),
when the transition behaviour itself is changed.

(So, the "single responsibility" each State subclass isn't exactly "single" when they both have to maintain 1. basic state behaviour as well as 
2. state transitions to neighbours.)

I do feel that one weakness of the State Pattern is that it is all too tempting to put an implementation detail of a State
into the Context itself, resulting in multiple levels of abstraction being within the same file. Be conscious about 'private'
and 'protected' and 'public' methods even if they don't exist in JS.


--

As the number of states increases, the permutation of invisible invalid state transitions increases (space complexity) to the
n^2.

```
Number of transition states: n(n-1) // counting each edge of a Complete Graph twice for bidirectional transition
```

It's not so much the actual space requirement, it's the unscalability of filling in "every" transition in "every" state.
We definitely need to use 'default' error handling for these invalid state transitions within the ROOT state.

State classes are responsible for the transitions to only their immediate neighbouring states (a single
reason to change), whereas if you use procedural if/else branches, 
you may have a large tangled mess to reason through and adding more change requests 
will only tangle the branches further, which makes it a monolithic class with more than one reason to change.
Also, having a monolithic procedure means that procedure needs to know the implementation details, fields of 
all of the States, which increases coupling, in order to make a decision on how to do the state transition.

In GOF, the implementation issues raised are:

1. Who defines state transitions? _It is generally more flexible and appropriate to let the State subclasses
themselves specify their successor state_ (see above, it IS the responsibility of the subclass to manage its own
transition, beyond behaviour method delegation). **This requires adding an interface to the Context that lets
State objects set the Context's current state explicitly, i.e. _setState(newState)** (This also requires that
the State classes have a _reference to the Context_ e.g. ```constructor(Context), new State(this)```) 

 The "disadvantage" of decentralization is almost a non-issue, I'd rather have subclasses know their immediate
 neighbouring transition states than have to deal with one 'state manager' that knows ALL the implementation details
 of ALL states.

2. Table based State Transitions: sounds a lot more trouble than it is worth.

3. Creating and destroying State objects. Two choices: 
 (1) Create State objects only when needed, destroy them thereafter vs.
 (2) Creating State objects ahead of time, and never destroying them.

 In the gumball machine examples here, the states were created ONCE and 
 kept as references, i.e. approach (2).

 The first choice is preferable when _states that will be entered aren't known at run time AND contexts
 change infrequently._

 The second choice is preferable when _state changes occur rapidly, so you can avoid instantiation/destruction costs._

4. Using dynamic inheritance: I haven't heard of changing an object's class at runtime... but after re-reading
the Head First definition of State Class: **"The State Pattern allows an object to alter its behaviour when its
internal state changes. The object will appear to change its class."**, this is almost like a "hack" to build
this "changing its class" into the language (Java/Javascript). It also opens a can of worms on how much design 
patterns were built just to overcome language limitations, and how it may only be a magic pill for Java (which is the
langauge most examples illustrate the patterns in). Perhaps it would be prudent to take the principles across to JS, 
rather than just copying patterns wholesale across. But then again JS itself seems to be morphing into Java/Python?
