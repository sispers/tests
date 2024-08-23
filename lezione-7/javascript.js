//~ alt 126
//`` alt 96

var gladiator = {
    gladiator_name: `Pippo`,
    gladiator_age: 28,
    total_def: 10,
    base_def: 20,
    armor: 20,
    shield: 8,
    atk: {
        base_atk: 10,
        weapon: `longsword`,
    },
    
};

var message = `the defense of "${gladiator.gladiator_name}" is "${gladiator.total_def}"`;
console.log (message);


var gladiator_def = (a, b, c) => {
    var total_def = (a.base_def + b.armor + c.shield);
    
    
    var message = `the defense of "${gladiator.gladiator_name}" is "${gladiator.total_def}"`;
    console.log (message);
};

gladiator_def = (gladiator.base_def, gladiator.armor, gladiator.shield);

var sum = (a, b) => {
    console.log(a +b);
};

sum(5, 6);