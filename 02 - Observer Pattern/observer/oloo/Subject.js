// Observable

const Subject = {

  init() {
    this._observers = [];
  },

  registerObserver(observer) {
    this._observers.push(observer);
  },

  removeObserver(observer) {
    this._observers = this._observers.filter(o => o !== observer);
  },

  notifyObservers(data) {
    // somehow this isn't working with
    // ForexStation._observers
    this._observers.forEach((observer) => {
      observer.update(data);
    });
  },

}

module.exports = Subject;



