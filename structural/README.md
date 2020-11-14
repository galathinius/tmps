# The thematic for this laboratory is

# Structural Design Patterns

The task is described [here](https://github.com/Wazea/SDTM-Labs/tree/master/Lab%232)

For general repo info and how to run the code, check the base [Readme](https://github.com/galathinius/tmps)

**The author is**<br/>
Plesca Anisoara-Ionela<br/>
FAF-182<br/>
Technical University of Moldova<br/>

**Backstory**<br/>
The first part is described [there](https://github.com/galathinius/tmps/tree/master/creational#creational-design-patterns)<br/>
Now it seems that the breeder got some Customer Service company that is speaking a strange language, so and someone has been employed to translate everything. <br/>
However, you are too lazy to deal with a translator too, so you give this task to a Henchman.<br/>

**Introduction/Theory**<br/>

> Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.<br/> [credits](https://refactoring.guru/design-patterns)

So, our translator comes from a long family tree of _Adapters_, but who are those?

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.<br/> [credits](https://refactoring.guru/design-patterns/adapter)

The Henchman says he is part of the noble race _Proxy_. Let's hope that's not a code word for the Mafia.

> Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.<br/>[credits](https://refactoring.guru/design-patterns/proxy)

That Customer Service company by the name of _Facade_ also seems kinda shady, hopefully the breeder director knows what he's doing.

> Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.<br/> [credits](https://refactoring.guru/design-patterns/facade)

**Implementation & Explanation & Results**<br/>

The Proxy pattern class is used in the client code, in the populate farm function, where a proxy is created and used to get animals<br/>
`const proxy = new Proxy();`<br/>
`kindaHorse = proxy.getHippogriff();`

Both Facade and Adapter objects are used in the Proxy class where a translated product is needed from the Facade, so the Adapter translates it.<br/>
`this.facade = new Facade();`<br/>
`this.adapter = new Adapter(this.facade);`<br/>

The proxy is used to log all the requests<br/>
`console.log("getting a horse");`<br/>

And it can get a certain number of random animals, as seen in the client populate farm function<br/>
`let kindaHorses = proxy.getAnimals(3);`<br/>
<br/>

The Facade is tasked with dealing with the breeder director and builders as seen in the _getHorse_ function<br/>
`public getHorse(): string {`<br/>
  `this.director.setBreeder(this.builder);`<br/>
  `let kindaHorse: string;`<br/>
  `this.director.makeHorse();`<br/>
  `kindaHorse = this.builder.getProduct().listParts();`<br/>
  `return kindaHorse.split("").reverse().join("");`<br/>
`}`<br/>

Unfortunately the Facade employs creatures from an outsourcing company, and their english isn't the best. Now the translator is needed, and it translates the result from the Facade into something comprehensible. For example the same getHorse method:<br/>
`public getHorse(): string {`<br/>
  `return this.facade.getHorse().split("").reverse().join("");`<br/>
`}`<br/>
