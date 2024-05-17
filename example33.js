// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25

const s=[2, "11", 3, "a2", false, 5, 7, 1]
let sum=0
for(let i=0;i<s.length;i++){
    if('number'===typeof s[i]){
        sum+=s[i]
    }
}
console.log(sum);

