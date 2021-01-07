import { Observer } from "../behavioral/subscriber";

export class HorseFarm {
  private static instance: HorseFarm;

  private constructor() {}

  //
  // creational patterns
  // singleton

  public static goVisit(): HorseFarm {
    if (!HorseFarm.instance) {
      HorseFarm.instance = new HorseFarm();
    }

    return HorseFarm.instance;
  }

  private animals: string[] = [];

  public seeAnimals() {
    if (this.animals.length === 0) {
      console.log("Sorry, there are no animals yet");
    } else {
      for (let animal in this.animals) {
        console.log(`There is:\n ${this.animals[animal]}`);
      }
    }
  }

  public takeCareOfAnimals(worker) {
    if (this.animals.length === 0) {
      console.log(`${worker.name} has is nothing to care for`);
    } else {
      for (let animal in this.animals) {
        console.log(
          `${worker.name} is taking care of:\n ${this.animals[animal]}`
        );
      }
    }
  }

  public addAnimals(animal) {
    this.animals.push(animal);
    this.notify();
  }

  //
  // behavioral patterns
  // publisher

  private observers: Observer[] = [];

  /**
   * The subscription management methods.
   */
  public attach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  /**
   * Trigger an update in each subscriber.
   */
  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
