import { Facade } from "./facade";
import { Adapter } from "./adapter";

export class Proxy {
  private facade: Facade;
  private adapter: Facade;

  constructor() {
    this.facade = new Facade();
    this.adapter = new Adapter(this.facade);
  }

  public getAnimals(count): string[] {
    let animals = [];

    for (let i = 0; i < count; i++) {
      let randomNum = Math.random();

      if (randomNum < 1 / 3) {
        animals.push(this.getHorse());
      } else if (randomNum > 2 / 3) {
        animals.push(this.getHippogriff());
      } else {
        animals.push(this.getSomething());
      }
    }

    return animals;
  }

  public getHorse(): string {
    console.log("getting a horse");
    return this.adapter.getHorse();
  }

  public getHippogriff(): string {
    console.log("getting a hippogriff");
    return this.adapter.getHippogriff();
  }

  public getSomething(): string {
    console.log("getting a something");
    return this.adapter.getSomething();
  }
}
