

const s=[23,4,6,7,6,4]
const d=[23,4,45,65,23,67,12]
const i=3
//at method 
// console.log(s.at(i)); 

//concat method
const con=s.concat(d);
// console.log(con);

const ent=['a','b','c','d']
const enter=ent.entries();
for(let [keys,value] of enter){
// console.log("keys :",keys ,"values :",value);

}

//every method

const ever=(curr)=>{
    return curr < 40;
}

const array=[2,3]
const chan=array.every(ever);
// console.log(chan);

//fill method

const fil=[2,3,4,5,6]
// console.log(fil.fill(0,2,8));


//find method

// console.log(fil.find((cu)=>cu>4));

//findindex method

const lar=[23,34,6,23,43,123]
const fin=(cue)=>cue>34;

// console.log(lar.findIndex(fin));

//includes methods

// console.log(lar.includes(23));

//some method

const re=(eve)=>eve%2==0;
const tr=lar.some(re)

// console.log(tr);







