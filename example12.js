//find the duplicate in the  array

const s=[3,4,3,6,4,8]

// const dup=[...new Set(s)]
// console.log(dup);

const emp=[]
for(let i=0;i<s.length;i++){
    if(!emp.includes(s[i]))
    {
        emp.push(s[i])

    }
}

console.log(emp);

