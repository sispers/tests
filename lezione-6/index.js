var sum = (a, b)=>{
    var result =a + b;
    return result;
}
 var sub = (a, b)=>{
    var result =a - b;
    return result;
}
var mult = (a, b)=>{
    var result =a * b;
    return result;
}
var div = (a, b)=>{
    var result =a / b;
    return result;
} 

console.log("il risultato dell'opreazione è")
console.log(mult(5,12))

//-nella mia testa questo funzionava ma nella pratica no...-

// var tot = (sum, sub, mult, div)=>{
//      var sum = (a, b)=>{
//         var result =a + b;
//         return result;
//     }
//      var sub = (a, b)=>{
//         var result =a - b;
//         return result;
//     }
//     var mult = (a, b)=>{
//         var result =a * b;
//         return result;
//     }
//     var div = (a, b)=>{
//         var result =a / b;
//         return result;
//     }
//     return result
// }
// console.log("il risultato dell'operazione è"tot(sum(1,2)))


var utente1 = {
    name:'bruno',
    surname:'bianchi',
    age:17,
    adult:false,
    hobbies:['boxe', 'swimming', 'gardening'],
    address:{
        city:'Roma',
        street:'via di roma',
        civic:'1',
    }
}

var utente2 = {
    name:'frank',
    surname:'napolitano',
    age:23,
    adult:true,
    hobbies:['gaming', 'food', 'gym'],
    address:{
        city:'napoli',
        street:'via di napoli',
        civic:'7',
    }
}

var utente3 = {
    name:'genoveffo',
    surname:'moccia',
    age:62,
    adult:true,
    hobbies:['writing', 'photograpy', 'cycling'],
    address:{
        city:'bologna',
        street:'via di bologna',
        civic:'24',
    }
}


console.log(utente1.hobbies[2])

console.log(utente1.address.city)



// ho provato a fare così per l'operazione ma non funge...

// var age_difference = (utente3.age, utente2.age)=>{
//     var difference = utente3.age-utente2.age;
 
//     return difference;
// }