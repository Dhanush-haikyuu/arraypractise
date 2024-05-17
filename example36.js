// Write a JavaScript program to count the number of arrays inside a given array.

const { isArray } = require("chart.js/helpers")

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

const arr=[2,8,[6],3,3,5,3,4,[5,4]]
let count=0
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        count++;

    }
}
console.log(count);
