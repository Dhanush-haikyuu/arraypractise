// Write a JavaScript function to get the nth largest element from an unsorted array.

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89


function largesting(arr1,finding){
    const sorted=arr1.sort((a,b)=>a-b);
    for(let i=0;i<arr1.length;i++){
        if(i==(finding)){
            return arr1[i];
        }
    }


}

console.log(largesting([43, 56, 23, 89, 88, 90, 99, 652],4))