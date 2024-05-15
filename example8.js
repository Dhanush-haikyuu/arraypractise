// Write a JavaScript program to compute the sum and product of an array of integers
let sum=0;
function ret(arr){

    const diff=arr.reduce((acc,num)=>acc+num,0);
    const differ=arr.reduce((acc,num)=>acc*num);

    console.log("Sum :",diff);
    console.log("product :",differ);



}




ret([2,4,6,8,3])

