interface Breeder {
  addBody(): void;
  addHorseLegs(): void;
  addHorsehead(): void;
  addEagleClaws(): void;
  addEagleWings(): void;
  addEagleHead(): void;
}

class KindaHorse {
  public parts: string[] = [];

  public listParts(): string {
    return `${this.parts.join(", ")}\n`;
  }
}

export class HorseBreeder implements Breeder {
  private product: KindaHorse;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new KindaHorse();
  }

  public addBody(): void {
    this.product.parts.push("A horse");
  }

  public addHorsehead(): void {
    this.product.parts.push("with a horse head");
  }

  public addHorseLegs(): void {
    this.product.parts.push("with horse legs");
  }

  public addEagleClaws(): void {
    this.product.parts.push("with eagle claws");
  }

  public addEagleWings(): void {
    this.product.parts.push("with eagle wings");
  }

  public addEagleHead(): void {
    this.product.parts.push("with an eagle head");
  }

  public getProduct(): KindaHorse {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder: Breeder;

  public setBreeder(builder: Breeder): void {
    this.builder = builder;
  }

  public makeHorse(): void {
    this.builder.addBody();
    this.builder.addHorseLegs();
    this.builder.addHorsehead();
  }

  public makeHippogriff(): void {
    this.builder.addBody();
    this.builder.addHorseLegs();
    this.builder.addEagleClaws();
    this.builder.addEagleHead();
    this.builder.addEagleWings();
  }
}
