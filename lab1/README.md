# The thematic for this laboratory is

# Creational Design Patterns

The task is described [here](https://github.com/Wazea/SDTM-Labs/tree/master/Lab%231)

**The author is**<br/>
Plesca Anisoara-Ionela<br/>
FAF-182<br/>
Technical University of Moldova<br/>

**Backstory**<br/>
You go to a horse farm to see the horses.<br/>
There are also some hippogriffs
and people that take care of those animals.

**Introduction/Theory**<br/>

> Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.<br/> > [credits](https://refactoring.guru/design-patterns)

For the situation described in the Backstory, it was decided that the horse farm will conform to the Singleton pattern, as there is only one such farm in our kingdom.

> Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.<br/> > [credits](https://refactoring.guru/design-patterns/singleton)

As we live in a magical kingdom, we need all kinds of magical creatures.
Thus it was decided that the animals at that farm will be created using a Builder pattern.

> Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.<br/> > [credits](https://refactoring.guru/design-patterns/builder)

And of course any farm needs workers to take care of the animals, so it was decided that the workers will be created using a Prototype pattern.

> Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.<br/> > [credits](https://refactoring.guru/design-patterns/prototype)

**Implementation & Explanation & Results**<br/>
The usage of all the patterns can be observed in the _index.ts_ file.
There, on row 5, we visit an empty farm with no animals, and thats what we get in the console<br/>
`Sorry, there are no animals yet`

In row 6 we call a function that populates the farm with a horse, with a hippogriff, and with something in-between.

Then, when we visit again the farm in row 7, we can see some animals being described<br/>
`There is: A horse, with horse legs, with a horse head`

`There is: A horse, with horse legs, with eagle claws, with an eagle head, with eagle wings`

`There is: A horse, with eagle claws`

After that, in row 9, someone is called to take care of the animals, and there are 2 people<br/>

`Elleanor is taking care of: A horse, with horse legs, with a horse head`

`Elleanor is taking care of: A horse, with horse legs, with eagle claws, with an eagle head, with eagle wings`

`Elleanor is taking care of: A horse, with eagle claws`

`Alex is taking care of: A horse, with horse legs, with a horse head`

`Alex is taking care of: A horse, with horse legs, with eagle claws, with an eagle head, with eagle wings`

`Alex is taking care of: A horse, with eagle claws`

**Conclusion**<br/>
This lab really showed me that design patterns are useful, especially as we worked with the Object Pool pattern at our Network Programming course. So I think I will do that pattern for that course as it seems interesting.
