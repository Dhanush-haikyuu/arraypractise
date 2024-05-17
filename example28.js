// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function ranging(start,len){
    let emp=new Array(len)
    for(let i=0;i<len;i++,start++){
        emp[i] = start;

    }
    return emp;

}







console.log(ranging(1,4))
console.log(ranging(-6, 4));



