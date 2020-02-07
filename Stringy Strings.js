//https://www.codewars.com/kata/563b74ddd19a3ad462000054
function stringy(size) {
    // your code here
    let result = '';
    for(let i = 0; i < size; i++){
      i % 2 ? result += '0' : result += '1'
    }
    return result
  }