// Write a JavaScript function to move an array element from one position to another.

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]


function move(data,remove,replace){
    const removed=data.splice(remove,1)
    const correction=data.splice(replace,0,...removed);
    return (data);
}









console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));