function expandedForm(num) {
    let numString = num.toString().split('');
    let out = '';
    
    numString = numString.map(a => Number(a));

    out += `${numString[0] * (10 ** (numString.length - 1))}`;
    numString = numString.slice(1, numString.length);

    while (numString.length > 1) {
        if (numString[0] !== 0) {
            out += ` + ${numString[0] * (10 ** (numString.length - 1))}`;
        }
        numString = numString.slice(1, numString.length);
    }
    if (numString[0] === '0') {
        return out;
    }
    return numString[0] === 0 ? out : out += ` + ${numString[0]}`
}

// const expandedForm = (num) => num.toString().split('').reverse().map( (a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(' + ')

console.log(expandedForm(7301034));
// const n = 7301034
// console.log(n.toString().split('').reverse().map( (a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(' + '))

// const num = 70304
// numString = num.toString().split('');
// console.log(numString);
// console.log(numString.length - 1);
// let length = (numString.length - 1)
// numString = numString.map(a => (Number(a) * (Math.pow(10, (numString.length() - 1)))));
// console.log(numString);