// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;


// console.log(newNumbers);
// console.log(numbers);


const add = {
    d:17,
    e: 20,
    x: {
        y:7
    }
};

const clon = Object.assign({}, add);
clon.d = 25;
// console.log(clon);
// console.log(add);

const oldArray  = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jnhbgvfc';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wp', 'lj', 'bloger'];
const internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 4];

log(...num);



const array = ['a', 'b'];
const newArra = [...array];


const q = {
    one: 1,
    two: 2
};
const p = {...q};

console.log(p);