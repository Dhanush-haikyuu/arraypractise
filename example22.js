// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var emp=[]

const merging=array1.concat(array2);
for(let i=0;i<array1.length;i++){
    if(!emp==includes(merging[i])){
        emp.push(merging[i])
    }
    
}