/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const rollno=[61,62,63,68,69,70,64,65,66,67,86]
let maxElement = rollno[0]

for(let i=0; i<=rollno.length; i++){
    
    if(rollno[i]>maxElement){
        maxElement = rollno[i]
        
    }
}
console.log(maxElement);
    
}

module.exports = findLargestElement;
