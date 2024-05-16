const s=[1,2,3,4,5,6,4,3,4,6,2,3,5]
const origin=[]
const dup=[]
for(let i=0;i<s.length;i++){
    if(origin.includes(s[i])){
        
        if(!dup.includes(s[i])){
            dup.push(s[i]);
        }


    }
    else{
        origin.push(s[i]);
    }
}

console.log(origin);
console.log(dup);

// const arr=[2,3,45,6,7]
// let index=2
// console.log(arr[index]);
