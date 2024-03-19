/**
 * 
 * 
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 * 
 * 
 * **/ 


const statement = 'I am a hard working person';

const elements = statement.split(' ');
const revElements = [];


for(const i of elements){
    revElements.unshift(i);
}

console.log(revElements.join(' '));
