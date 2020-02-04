//https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((sum, next) => {return sum + next}, 0)/ marks.length)
  }