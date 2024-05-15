//find the duplicate in the  array

const s=[3,4,3,6,4,8]
const d=[]

for(let i=0;i<s.length;i++){
    for(let j=1;i<s.length;i++){
        if(s[i]==s[j]){
            d.pop(s[i])
        }
        else{
            d.push(s[i])
        }

    }

}
console.log(d);