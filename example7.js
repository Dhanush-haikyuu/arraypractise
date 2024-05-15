let sum=0;
var sub=0
function arr(trick){
    const tri=trick.forEach((element) => {
        sum+=element
        sub=sum**2

        

        
    })

    return sub;

    }

const sqr=arr([1,2,3,4,5,6])
console.log(sqr);