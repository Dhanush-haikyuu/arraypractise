// Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
 [
    ["a","b"],
    [1,2],
    // [true,false]
]
// [["a","b"],[1,2],[true]]

function unzip(first){
    var full=[]
    var num=[]
    var bool=[]
    var char=[]
    var merging=first.flat(Infinity);

    for(i=0;i<merging.length;i++){
        // console.log(typeof merging[i]==='number');
        // console.log(typeof merging[i])
        
        if(typeof merging[i]==='number'){

            num.push(merging[i])
        }
        else if('boolean' === typeof merging[i]){
            bool.push(merging[i])
        }
        else if('string' === typeof merging[i] ){
            char.push(merging[i])
        }
        else{
            return "empty array"
        }
        
    }

    let correct=[char,num,bool];
    return correct;
}







console.log(unzip([['a', 1,true], ['b', 2,false]]))
// console.log(unzip([['a', 1, true], ['b', 2]]))