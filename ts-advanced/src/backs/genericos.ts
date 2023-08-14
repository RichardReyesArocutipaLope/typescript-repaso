import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero } from "../interfaces";


printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7]);
printObject('hola mundo');

console.log(genericFunction(3.1416))

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade winston Wilson',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).)