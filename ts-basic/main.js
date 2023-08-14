"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validaDate = (myDate) => {
        return !isNaN(myDate.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Richard'));
//# sourceMappingURL=main.js.map