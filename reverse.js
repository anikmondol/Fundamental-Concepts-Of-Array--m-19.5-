// //              [7, 6, 5, 4, 3, 2, 1]

// // const numbers = [1, 2, 3, 4, 5, 6, 7];

// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);

// const revNumbers = [];

// for(const num of numbers){
//     // console.log(num);
//     // revNumbers.unshift(num)
// }

// // console.log(revNumbers);



// for(let num = numbers.length; num >= 0; num--){
//     // console.log(num);
//     revNumbers.push(num);
// }

// console.log(revNumbers);




// // const friends= ['Elon', 'Bill', "Mark", 'Waren'];
// // const revFriend =[];

// // for(const friend of friends){
// //     revFriend.unshift(friend);
// // }

// // console.log(revFriend);



const numbers = [1, 2, 3, 4, 5, 6, 7];
const revNumbers = [];


// decremental for loop 

for(let i = numbers.length - 1; i >= 0; i--){
    // console.log(i);
    revNumbers.push(numbers[i])
}


console.log(revNumbers);