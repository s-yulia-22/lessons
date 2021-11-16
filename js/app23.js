

const soldier = {
    health: 400,
    bron: 200
};


const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;



Object.setPrototypeOf(john, soldier);
console.log(john.bron);