// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
function getting(array1,array2){
const emp=[]
const maximum=Math.max(array1.length,array2.length);
for(let i=0;i<maximum;i++){
    const ran1=array1[i] !== undefined ? array1[i] :0;
    const ran2=array2[i] !== undefined ? array2[i] :0;
    emp.push(ran1+ran2);
}   
return emp;
}

console.log(getting([1,2,3,4,5],[4,5,6,7,2,3]))