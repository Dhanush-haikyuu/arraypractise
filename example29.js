// Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]


function difference(first,second){
    let emp=[]
    let merg=([...first,...second])
    let merging=merg.flat(Infinity);
    for(let i=0;i<merging.length;i++){
        if(!emp.includes(merging[i])){
            emp.push(merging[i])
        }

    }
    return emp;
    

} 






console.log(difference([1, 2, 3], [100, 2, 1, 10]))
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
