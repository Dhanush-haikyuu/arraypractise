// Write a JavaScript function to find the difference between two arrays.
// Test Data :

function difference(diff1,diff2){
    const emp=[]
    const dup=[]
    const merging=diff1.concat(diff2);
    const sorted=merging.sort((a,b)=>a-b)
    for(let i=0;i<sorted.length;i++){
        if(emp.includes(sorted[i])){
            if(!dup.includes(sorted[i])){
                dup.push(sorted[i])
            }
        }
        else{
            emp.push(sorted[i])
        }
    }
    console.log("duplicate :",dup);
    console.log("original :",emp);
    
    

}


difference([1,2,3],[100,2,1,10]);
