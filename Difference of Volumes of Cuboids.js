//https://www.codewars.com/kata/58cb43f4256836ed95000f97
const findDifference = ((a, b) => Math.abs(a.reduce((sum, val) => { return sum *= val }) - b.reduce((sum, val) => { return sum *= val })))