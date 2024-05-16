function checking(start, end, step) {
    const result = [];
    let currentValue = start;

    while (currentValue <= end) {
        result.push(currentValue);
        currentValue = String.fromCharCode(currentValue.charCodeAt(0) + step);
    }

    return result;
}
console.log(checking('a', 'z', 2));


