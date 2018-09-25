When a change request comes in, the state pattern makes it much easier to
make modifications to behaviour by extending (subclassing) affected State classes
and extending the Context class (Open-Closed principle).

(Will we end up with multiple "old", unused versions of the original parent Context/State classes which
we will eventually merge back instead of extending? It might be easier than having to open multiple files.)

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

4. Using dynamic inheritance: I haven't heard of changing an object's class at runtime...
