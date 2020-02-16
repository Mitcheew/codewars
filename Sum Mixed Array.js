//https://www.codewars.com/kata/57eaeb9578748ff92a000009
function sumMix(x) {
    return x.map(x => parseInt(x)).reduce((sum, val) => sum + val)
}