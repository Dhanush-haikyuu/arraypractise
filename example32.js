// Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

// Test Data :
// [1, 33, 5]
// [1, 3, 5, 7]
// [2, 4]
// Expected Output:
// [[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
function repeated(repe){
    console.log(repe)
    for(let i=0;i<repe.length-1;i++){
        var dele=repe.splice(i,1);
        var spilicing=repe.splice(i+1,0,dele[i])
        console.log(repe);
    }
}
console.log(repeated([1, 33, 5]))