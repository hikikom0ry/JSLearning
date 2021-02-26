const soldier = {
    health: 400,
    armor: 100
};


const john = Object.create (soldier);
//john.__proto__ = soldier;
//Object.setPrototypeOf(john, soldier);


console.log(john.armor);

