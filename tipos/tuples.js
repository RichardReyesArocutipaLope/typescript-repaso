"use strict";
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 50; //! ERROR
    hero[1] = 'Ironman'; //! ERROR
    hero[0] = 'Thor'; //* ACEPTADO
    hero[1] = 350; //* ACEPTADO
})();
