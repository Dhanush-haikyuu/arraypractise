function folo(s){
    let str=[]
    let num=[]
    let bool=[]
    var d=s.flat(Infinity);
    for(let i=0;i<d.length;i++){
        if(typeof d[i]==='string'){
            str.push(d[i]);
        }
        else if(typeof d[i] === 'number'){
            num.push(d[i])
        }
        else if(typeof d[i]=== 'boolean'){
            bool.push(d[i])
        }
    }
    console.log([str,num,bool]);
}

folo([['a', 1, true], ['b', 2,false]])
