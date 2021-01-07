export interface Observer {
  // Receive update from subject.
  update(subject): void;
}

export class ConcreteObserver implements Observer {
  public update(subject): void {
    console.log("Got notified about new animals");
  }
}
