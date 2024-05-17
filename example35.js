// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]

const arr=[2, NaN, 8, 16, 32,NaN]
const emp=[]
for(let i=0;i<arr.length;i++){
    if(Number.isNaN(arr[i])){//number is not a number checking using Number.isNaN
        emp.push(i);

    }
}
console.log([emp]);
