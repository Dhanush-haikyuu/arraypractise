// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]

function array_filled(len,inc){
    pusing=[]
    
    for(i=1;i<=len;i++){
        pusing.push(inc)
        
    }
    return pusing;
}






console.log(array_filled(6, 0));
console.log(array_filled(4, 11));



