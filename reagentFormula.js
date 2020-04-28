//https://www.codewars.com/kata/59c8b38423dacc7d95000008
function isValid(x){
    //false cases: 1&2, 3&4, 5!6, 6!5, !(7||8)
    if(x.indexOf(1) >=0 && x.indexOf(2) >=0 || x.indexOf(3) >=0 && x.indexOf(4) >=0 || x.indexOf(5) >=0 && x.indexOf(6) === -1 || x.indexOf(5) === -1 && x.indexOf(6) >=0){
      return false
    } else if (x.indexOf(7) >=0 || x.indexOf(8) >=0){
      return true
    } else {
      return false
    }
  }