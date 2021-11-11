"use strict";

const str = 'test';
const arr = [1, 2, 3];
console.log(arr.length); 
console.log(str.toUpperCase());
console.log(str.toLowerCase());

////////////////////////////

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
/////////////////////////////

const logg = 'Hello World';

console.log(logg.slice(6, 11));
console.log(logg.slice(3));
////////////////////////

const logg = 'Hello World';
console.log(logg.substring(6, 11));
/////////////////////////

console.log(logg.substr(6, 2));
//////////////////////////////
const num = 12.2;
console.log(Math.round(num));
///////////////////////////
const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));