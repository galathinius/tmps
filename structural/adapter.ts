import { Facade } from "./facade";

export class Adapter extends Facade {
  private facade: Facade;

  constructor(facade: Facade) {
    super();
    this.facade = facade;
  }

  public getHorse(): string {
    return this.facade.getHorse().split("").reverse().join("");
  }

  public getHippogriff(): string {
    return this.facade.getHippogriff().split("").reverse().join("");
  }

  public getSomething(): string {
    return this.facade.getSomething().split("").reverse().join("");
  }
}
