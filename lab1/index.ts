import { HorseFarm } from "./singleton";
import { HorseBreeder, Director } from "./builder";
import { Prototype } from "./prototype";

visitFarm();
populateFarm();
visitFarm();

takeCareOfFarm();

function visitFarm() {
  const s1 = HorseFarm.goVisit();

  s1.seeAnimals();
}

function populateFarm() {
  const s1 = HorseFarm.goVisit();

  const director = new Director();
  const builder = new HorseBreeder();
  director.setBreeder(builder);
  let kindaHorse: string;

  director.makeHorse();
  kindaHorse = builder.getProduct().listParts();
  s1.addAnimals(kindaHorse);

  director.makeHippogriff();
  kindaHorse = builder.getProduct().listParts();
  s1.addAnimals(kindaHorse);

  builder.addBody();
  builder.addEagleClaws();
  kindaHorse = builder.getProduct().listParts();
  s1.addAnimals(kindaHorse);
}

function takeCareOfFarm() {
  const s1 = HorseFarm.goVisit();
  const person1 = new Prototype();
  person1.name = "Elleanor";
  person1.otherDetails = new Date();
  s1.takeCareOfAnimals(person1);

  const person2 = person1.clone();
  person2.name = "Alex";
  s1.takeCareOfAnimals(person2);
}
