"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('tony');
    console.log({ name });
})();
