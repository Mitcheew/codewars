//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
function arrayMadness(a, b) {
    return a.reduce((total, num) => total += (num * num), 0) > b.reduce((total, num) => total += (num * num * num), 0)
    }