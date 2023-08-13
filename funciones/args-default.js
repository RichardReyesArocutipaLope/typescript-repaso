"use strict";
(() => {
    const fullName = (firstName, lastName = 'efe', upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('tony');
    console.log({ name });
})();
