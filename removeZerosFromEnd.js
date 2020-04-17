//https://www.codewars.com/kata/570a6a46455d08ff8d001002
function noBoringZeros(n) {
    let x = n.toString().split('')
    for (let i = x.length - 1; i > 0; i--) {
        if (x[i] === '0') {
            x.pop()
        } else {
            break;
        }

    }
    return Number(x.join(''));
}