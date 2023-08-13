"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    let myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('Richard'));
})();
