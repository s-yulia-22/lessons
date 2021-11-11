"use strict";


let num = 20; 

function showFirtsMessage(text) {
    console.log(text);
    num = 10;
}

showFirtsMessage("Hello");
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

const calc = (a, b) => a + b;

console.log(calc(3,7));
console.log(calc(1,2));
console.log(calc(4,7));
console.log(calc(5,7));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello')
};

logger();


