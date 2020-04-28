//https://www.codewars.com/kata/541c8630095125aba6000c00
function digital_root(n) {
    // ...
    let newNum = n > 9? n.toString().split('').reduce((a,b) => Number(a) + Number(b)) : n
    if(newNum > 9){
      return digital_root(newNum);
    } else {
      return newNum
    }
    
  }