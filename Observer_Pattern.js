//Observers can unsubscribe
class Subject {
    constructor() {
      this.observers = [];
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message) {
      this.observers.forEach(observer => observer.update(message));
    }
  }

  class Observer {
    constructor(name) {
      this.name = name;
    }

    update(message) {
      console.log(`${this.name} received message: ${message}`);
    }
  }

  const subject = new Subject();
  const observerA = new Observer("Observer A");
  const observerB = new Observer("Observer B");

  subject.addObserver(observerA);
  subject.addObserver(observerB);

  subject.notify("Hello, observers!");

  subject.removeObserver(observerA);

  subject.notify("Hello again, observers!");