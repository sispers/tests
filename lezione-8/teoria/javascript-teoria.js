//~ alt 126
//`` alt 96


// creo un gladiatore
// creo un avverario
// prima di combattere calcolo la difesa totale (base_def + armor + shield)
// poi combattono
// se l'attacco e' maggiore della difesa il gladiatore vince
// se l'attacco e' minore della difesa il gladiatore toglie hp all'avversario



// var message = `the defense of "${gladiator.gladiator_name}" is "${gladiator.total_def}"`;
// console.log (message);

// Function theory
// creare una variabile
// var

// voglio creare un nome univoco alla mia variabile (referenza)
// gladiator_def

// =
// attribuire/assegnare un valore alla variabile

// (a, b, c)
// argomenti della funzione, ovvero cio' che la funzione puo' ricevere come input

// =>
// voglio cominciare a scrivere il corpo della mia funzione

// {
// inizio il blocco/corpo della funzione

// } chiudo il corpo/blocco della funzione

// il corpo della funzione contiene delle istruzioni
// al di fuori del corpo (scope) non posso accedere direttamente alle referenze interne alla funzione (private)
// per poter accedere alle referenze devo:
// 1. eseguire (chiamare) la funzione, 
// 2. esporre quelle referenze (return), 
// 3. assegnare il valore ritornato ad una variabile
// 4. quella variabile diventa un riferimento alle referenze ritornate dalla funzione



var console = {
    log: (message) => {message}
}



var sum = () => {
    var a = 1;
    var b = 2;
    var result = a + b;

    return result;
};

// 1. chiamo la funzione
var r = sum();



// qual'e lo scopo/funzione di una variabile
// di contenere un valore
// di dare un nome univoco ad un valore
// di poter riferirsi a qual valore in un secondo momento

var troll = {
    name: `Pippo`,
    age: 28,
    defense: {
        base: 20,
        armor: 20,
        shield: 8,
    },
    attack: [
        {
            weapon: `longsword`,
            base: 10,
            critical: 15,
        },
        {
            weapon: `spell`,
            base: 6,
            critical: 8,
        },
    ],
};

var getDefense = (character) => {
    return character.defense.base + character.defense.armor + character.defense.shield;
};

var logGladiatorDetails = (character) => {
    var def = getDefense(troll);

    console.log(`the defense of "${character.name}" is "${def}"`);
};

logGladiatorDetails(troll);
