// cos'e un array
// un array è una collezione/un insieme/un gruppo di elementi

// come si crea
var arr = [];
var arr2 = [1, 2, 3, 4, 5];
var a = 1;
var arr3 = [a, a + 1, a + 2, `ciao ${a}`, () => {}, {}, [], true, false, null, undefined];

// come si accede ai valori
// si accede ai valori tramite indice (posizione, numero).
// l'indice parte da 0
var primo = arr2[0]; // 1
var secondo = arr2[1]; // 2
var terzo = arr2[2]; // 3

// come si aggiungono valori
var persone = [];

persone.push('Mario'); // persone = ['Mario']
persone.push('Luigi'); // persone = ['Mario', 'Luigi']

var giochi = [];
giochi[3] = 'Sonic';

// come si rimuovono valori
var persone = ['Mario', 'Luigi', 'Peach'];
persone.pop(); // toglie l'ultimo elemento -> persone = ['Mario', 'Luigi']
persone.shift(); // toglie il primo elemento -> persone = ['Luigi']

var persone2 = ['Mario', 'Luigi', 'Peach'];
persone2.splice(1, 1); // toglie 1 elemento a partire dall'indice 1 -> persone2 = ['Mario', 'Peach']
var persone3 = ['Mario', 'Luigi', 'Peach'];
persone3.splice(1, 1, 'Marco', 'Gianni'); // toglie 1 elemento a partire dall'indice 1 e aggiunge 'Marco' e 'Gianni' -> persone3 = ['Mario', 'Marco', 'Gianni', 'Peach']

// come si contano i valori
var persone = ['Mario', 'Luigi', 'Peach'];
var numeroPersone = persone.length; // 3

// come si filtrano i valori
var persone = ['Mario', 'Luigi', 'Peach'];
var filtered = persone.filter((nome) => {
  return nome !== 'Luigi';
});

var filter = (arr, fn) => {
  var newArr = [];

  for (var index = 0; index < arr.length; index++) {
    var valore = arr[index];
    var result = fn(valore);
    
    if (result) {
      newArr.push(valore);
    }
  }

  return newArr;
}

var nums = [1, 1, 2, 1];
var isLessThan1 = (num) => { return num !== 1; };

var filtered = filter(nums, isLessThan1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array