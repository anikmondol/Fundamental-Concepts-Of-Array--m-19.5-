const person = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];


const sortedPerson = person.sort();
console.log(sortedPerson);

// sort  ----->
/**
 * 
 * Ascending  ----> smaller to larger: [1, 2, 3, 4...]
 * Descending -----> larger to smaller: [....4, 3, 2, 1];
 * 
 * **/ 



const numbers = [12, 2, 3, 74, 52];

// const sort = numbers.sort() // not working

const numbersAscending = [...numbers].sort(function (a, b) {return a - b})
const numbersDescending = [...numbers].sort(function (a, b) {return a + b})


console.log(numbersAscending);
console.log(numbersDescending);