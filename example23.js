// . Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function removing(array1,array2)
{
    for(let i=0;i<array1.length;i++){
        if(array1[i]===array2){
            array1.splice((i,1))
            i--;
        }
    }
    return array1;

}



console.log(removing([2, 5, 9, 6], 5))