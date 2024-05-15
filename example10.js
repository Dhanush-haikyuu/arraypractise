// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

const dup=[2,3,5,3,2,5,6,7]
const mapping=dup.map((val)=>{
    for(let i=1;i<=dup.length;i++){
        if(val==dup[i]){
            return val;
        }
        else{
            return val;
        }
    }
})

console.log(mapping);