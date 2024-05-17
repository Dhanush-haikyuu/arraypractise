// Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 3s2]) -> true

const factor=[2,4,8,16,32]
for(let i=0;i<factor.length;i++){
    if(factor[i]*2==factor[i+1]){
        console.log("true")
    }
}