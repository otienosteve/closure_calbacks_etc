# Advanced Functions
## First-class Citizen, CallBacks, Lexical Scoping, Scope Chain, Closure


## First Class Citizen
In programming language design, a first-class citizen (also type, object, entity, or value) in a given programming language is an entity which supports all the operations generally available to other entities.
-wikipedia

## CallBacks
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
-MDN

UseCase- Let's say we have 2 tasks, we are sure of implement (how to go about task 1), task 2 is related to task 1 and comes after it. 
The implementation of task 2 is can vary.
so we decide to implement task 1, provide it with task 1 as an argument and supply the output of task 1 to task 2.

Example- with arrays we are sure of 1 task we will do with them, that is to iterate/cycle through them but as we iterate we are not sure of what we will do to them. we implement the iterator function then supply second function as a callback/argument that will provide the second implementation which is what we will do to the arrays as we cycle through them.



## Scope Chain
JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.
-https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/


## Lexical Scoping
A lexical Scope means that a variable defined outside a function can beaccessible insisde another function defined outside the variable declaration. But the Opposite is not true; the variable definition cannot be accessible outside that function. https://stackoverflow.com/questions/1047454/what-is-lexical-scope

## Closure
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


