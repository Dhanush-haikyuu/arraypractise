// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
const a=[10,20,10,40,50,60,70]
let target=50
function rand(){
for(let i=0;i<a.length-1;i++){
    for(let j=i+1;j<a.length-1;j++){
        if(a[i]+a[j]===50){
            return [i,j];
        }
    }

}
}
console.log(rand());

