// metodi - funzioni
// proprietà - variabili
var str = 'abc';

// quanti caratteri ci sono in una stringa?
console.log(str.length); // 3

// come posso accedere ad un carattere?
console.log(str[0]); // a
console.log(str[2]); // c
console.log(str[1 + 1 + 1]); // undefined

var getN = (a) => {
  return 10 - a;
}

console.log(str[getN(0)]) // undefined
console.log(str[getN(9)]) // b
console.log(str['1']) // non si usa

// come faccio ad accedere all'ultimo carattere?
console.log(str[str.length - 1])

// metodi
// mdn string - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// indexOf / lastIndexOf
// restituiscono la posizione di una stringa all'interno di un'altra stringa
var saluto = 'ciao mondo';
console.log(saluto.indexOf('ao')); // 2
console.log(saluto.lastIndexOf('o')); // 9
console.log(saluto.indexOf('z')); // -1

// replace/replaceAll
// sostituisce un carattere con un altro
var saluto2 = 'ciao mondo';
saluto2.replace('o', 'a'); // 'ciaa mondo'
saluto2.replaceAll('o', 'a'); // 'ciaa manda'

// slice
// taglia una stringa
var saluto3 = 'ciao mondo';
console.log(saluto3.slice(0, 4)); // 'ciao'

// toLowerCase/toUpperCase
// trasforma una stringa in minuscolo/maiuscolo
var saluto4 = 'Ciao Mondo';
console.log(saluto4.toLowerCase()); // 'ciao mondo'
console.log(saluto4.toUpperCase()); // 'CIAO MONDO'

// trim/trimStart/trimEnd
// elimina gli spazi all'inizio e alla fine di una stringa
var saluto5 = ' ciao mondo ';
console.log(saluto5.trim()); // 'ciao mondo'

// split
// divide una stringa in un array di stringhe
var saluto6 = 'ciao mondo a tutti';
console.log(saluto6.split(' ')); // ['ciao', 'mondo', 'a', 'tutti']
console.log(saluto6.split('')); // ['c', 'i', 'a', 'o', ' ', 'm', 'o', 'n', 'd', 'o', ' ', 'a', ' ', 't', 'u', 't', 't', 'i'] 

// includes
// verifica se una stringa contiene un'altra stringa
var saluto7 = 'ciao mondo a tutti';
console.log(saluto7.includes('ao')); // true