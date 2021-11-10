"use strict";


if (4 == 9) {
    console.log('Ok!');
} else {
console.log('Error');
}


// if(num < 50){
//     console.log('Error');
// } else if(num > 100){
//     console.log('Error2');
// } else {
//     console.log('Ok!')
// }

// (num === 40) ? console.log('Ok') : console.log('Error');

const num = 50;
switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 51:
        console.log('True');
        break;
    default:
            console.log('Error');
            break;  
}