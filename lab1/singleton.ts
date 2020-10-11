export class HorseFarm {
  private static instance: HorseFarm;

  private constructor() {}

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
  }
}
