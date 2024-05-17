// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var emp=[]

const merging=[...array1,...array2];
for(let i=0;i<merging.length;i++){
    if(!emp.includes(merging[i])){
        emp.push(merging[i])
    }

    
}
console.log(emp);