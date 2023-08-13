"use strict";
(() => {
    let myCustomVariables = 'Fernando';
    console.log(typeof myCustomVariables);
    myCustomVariables = 20;
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: 'Barry allen',
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    console.log(typeof myCustomVariables);
})();
