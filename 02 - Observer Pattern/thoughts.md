This pattern involves Subscribers and Publishers, or Observers and Observables, or Observers and Subjects.

Why is this pattern important? There is often an object whose state or data is
really important to other objects (usually the view/display/render layers of the app, 
or other derived/minified states). These other objects are the _observers_.

These observers can either keep "accessing" the state, perhaps by polling at fixed
intervals (inefficient!), which is a *pull* action, or let the observable update them 
when the observable itself changes, which is a *push* action.

GOF Definition: Define a one-to-many dependency between objects so that when one object
changes state, all its dependents are notified and updated automatically.

Used when cooperating classes need to maintain consistency between related objects, yet
needed to reduce coupling between classes.

Each observer can make requests to change the state of the observable, and yet all observers
will be notified when this change happens.

The benefit of the observer pattern is that it is:
1. Easy to register/remove observers (registerObserver(o))
2. Possible to register multiple observers
3. Observers just need to define an interface (update()) which the observable can call
to notify it of updates
4. Observers are decoupled because they can manipulate the state given to them so
they can store it in their own implementations.
5. Push is more efficient than pull.

Disadvantages:
1. All observers will keep getting state updates, even if they aren't interested in those
particular parts of the state changes. (Push notification spam). This is particularly
iffy if "view" layers want to update at different timings, in other words, there is _temporal coupling_.
Particularly annoying if you have to implement a delay so that the user can see the change happen.
2. GOF: dependency criteria that aren't well-defined or maintained usually lead to updates which are
hard to track down. This problem is aggravated by the fact that the simple state update protocol
provides no details on _what_ changed. Without additional protocol to help observers discover what changed,
observers maybe forced to work hard to deduce the changes (back to coupling issues).

Other implementation issues:
1. Multiple observables? Perhaps sometimes one observer might observe a few observables, and 
the observables have to also inform the observer _which one_ of the observables sent the update.
2. Who triggers update? In the Head First example we made any state change trigger the notification, which
makes observers less responsible for triggering the update, however this results in potential several
operations causing several consecutive updates, which may be inefficient.
3. Delete subjects and dangling references (can solve this by having a 'deleted' notification so observers)
4. Self-consistency (making sure the notify() is called AFTER the state changes!). Possibly use a "template" method
which always has notify() at the end.
5. Push and pull model trade-offs. Push model: observers need to sort of know the implementation details of 
subject's state, which leads to less reuse. Pull model: observers need to work really hard to figure out what changed
without help from the subject, which is inefficient.
6. *Specifying modifications of interest explicitly. You can improve update efficiency by extending the subject's
registration interface by allowing registering observers only for specific events of interest. This uses the 
notion of aspects for Subject objects. Both the register(o, aspect) and update(o, aspect) include an "aspect" parameter which
determines who gets notified and what.*
7. Complex update semantics. If a change requires changes to several independent subjects, you might
have to ensure that their observers are notified only _after all subjects have been modified_. (Sequential coupling).
Use a 'Change Manager' to be responsible for this (using Strategy pattern, implement an 'update' strategy, e.g. 
Directed Acyclic Graph Change Manger to update in a particular order, so that each observer is notified only once
rather than causing multiple intermediate updates which may be 'wrong'). A Change Manager is also an instance of the
Mediator pattern.
8. Combining the Subject and Observer classes?

MVC is based on the Observer pattern. Also event listeners?
