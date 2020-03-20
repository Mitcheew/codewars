//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
function removeEveryOther(arr){
    for(let i = arr.length; i > 0; i--){
      if(i % 2 != 0){
        arr.splice(i, 1)
        i--;
      }
    }
    return arr
  }