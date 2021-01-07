# The thematic for this laboratory is

# Behavioral Design Patterns

The task is described [here](https://github.com/Wazea/SDTM-Labs/tree/master/Lab%233)

For general repo info and how to run the code, check the base [Readme](https://github.com/galathinius/tmps)

**The author is**<br/>
Plesca Anisoara-Ionela<br/>
FAF-182<br/>
Technical University of Moldova<br/>

**Backstory**<br/>
The first part is described [there](https://github.com/galathinius/tmps/tree/master/creational)<br/>
The second part is described [there](https://github.com/galathinius/tmps/tree/master/structural)<br/>
So, people want to get notified when there's a new animal to see at the farm.<br/>
What does the farm do?<br/>
A newsletter.<br/>

**Introduction/Theory**<br/>

> Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.<br/> [credits](https://refactoring.guru/design-patterns)

This newsletter uses a new kind of spell caled _Observer_ or _Pub-Sub_.<br/>
 What's that?<br/>

> Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.<br/> [credits](https://refactoring.guru/design-patterns/observer)

**Implementation & Explanation & Results**<br/>

This spell uses two parts.<br/>

One is the _Publisher_ implemented in the farm object (in _creational/singleton.ts_ ).<br/>

It consists of creating a list of subscribers, and adding methonds for managing those.<br/>
The methods are:<br/>
 - attach (or subscribe)<br/>
 - detach (or unsubscribe)<br/>
 - notify (letting the subscribers know about any updates)<br/>

Second is an object that subscribes to and receives updates, the _Suscriber_.<br/>

The Subscriber is an object with a single method _update_, the one receiving updates.<br/>

The interaction between the farm and the observer is created using the following code:<br/>

`const s1 = HorseFarm.goVisit();`<br/>
`const observer = new ConcreteObserver();`<br/>
`s1.attach(observer);`<br/>
<br/>

The resulting behavior can be seen in the console in the following lines:
`Subject: Attached an observer.`
`getting a hippogriff`
`Subject: Notifying observers...`
`Got notified about new animals`


