// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]

const { isNumber } = require("chart.js/helpers")

let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const correct=array.filter((val)=>{
    // if(isNumber(val)){
    //     return val;
    // }
    return val!==null && val!==undefined && Boolean(val);


    }

)
console.log(correct)
