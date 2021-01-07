import { HorseFarm } from "./creational/singleton";
import { Prototype } from "./creational/prototype";
import { Proxy } from "./structural/proxy";
import { ConcreteObserver } from "./behavioral/subscriber";

visitFarm();
subscribeToFarm();

populateFarm();
visitFarm();

// takeCareOfFarm();

function visitFarm() {
  const s1 = HorseFarm.goVisit();

  s1.seeAnimals();
}

function subscribeToFarm() {
  const s1 = HorseFarm.goVisit();
  const observer = new ConcreteObserver();

  s1.attach(observer);
}

function populateFarm() {
  const farm = HorseFarm.goVisit();

  const proxy = new Proxy();
  let kindaHorse: string;

  kindaHorse = proxy.getHippogriff();
  farm.addAnimals(kindaHorse);

  let kindaHorses = proxy.getAnimals(3);
  kindaHorses.forEach((horse) => farm.addAnimals(horse));
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
