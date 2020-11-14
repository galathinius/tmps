import { HorseBreeder, Director } from "./../creational/builder";

export class Facade {
  protected director: Director;
  protected builder: HorseBreeder;

  constructor() {
    this.director = new Director();
    this.builder = new HorseBreeder();
  }

  public getHorse(): string {
    this.director.setBreeder(this.builder);
    let kindaHorse: string;

    this.director.makeHorse();
    kindaHorse = this.builder.getProduct().listParts();
    return kindaHorse.split("").reverse().join("");
  }

  public getHippogriff(): string {
    this.director.setBreeder(this.builder);
    let kindaHorse: string;

    this.director.makeHippogriff();
    kindaHorse = this.builder.getProduct().listParts();
    return kindaHorse.split("").reverse().join("");
  }

  public getSomething(): string {
    let kindaHorse: string;

    this.builder.addBody();
    this.builder.addEagleClaws();
    kindaHorse = this.builder.getProduct().listParts();
    return kindaHorse.split("").reverse().join("");
  }
}
