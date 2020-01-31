//https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers){
    if(numbers.length > 0){
      return numbers.map(x => x*x).reduce(function(a,b){ return a + b })
    } else {
    return 0 
    }
    }