/**
 * 
 * Looping Technique
 * 
 * 1. for lop
 * 2. while loop
 * 3. do while -----> ignore
 * 4. for of ----> array loop korar jonno
 * 5. for in ----> object loop korar jonno
 * 
 * **/ 


const friends= ['Elon', 'Bill', "Mark", 'Waren'];


for(const friend of friends){
    // console.log(friend);
}


for(let i = 0; i < friends.length; i++){
    // console.log(friends[i]);
    // console.log(i);
}


const numbers = [11, 52, 85, 65, 123, 7, 114, 87, 896];

let i = 0;

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

while(i < numbers.length){
    // console.log(numbers[i]);
    i++;
}


let n = 0;

while(n < friends.length){
    console.log(friends[n]);
    n++;
}