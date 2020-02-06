//https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
function drawStairs(n) {
    let stairs = 'I';
    for (let i = 1; i < n; i++){
    stairs += `\n${' '.repeat(i)}I`; 
    }
    return stairs;
  }