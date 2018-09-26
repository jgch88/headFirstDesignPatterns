//is <<interface>> in JS even necessary?

class Subject {
  constructor() {
    this._observers = [];
  }

  registerObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter(o => o !== observer);
  }

  // pass in a data object to keep it a monad
  // rather than make this a function
  // a dyad/triad etc
  // good use of object destructuring
  notifyObservers(data) {
    this._observers.forEach((observer) => {
      observer.update(data);
    });
  }

}

module.exports = Subject;
