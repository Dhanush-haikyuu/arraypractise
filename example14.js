const arr = [1, 2, 3, 4, 5, 6, 7];

for(let i=0; i<arr.length; i++){

    const rand=Math.floor(Math.random()*(i+1));
    const temp=arr[i];
    arr[i]=arr[rand];
    arr[rand]=temp;

}

console.log(arr);

