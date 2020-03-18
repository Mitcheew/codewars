//https://www.codewars.com/kata/5704aea738428f4d30000914
function tripleTrouble(one, two, three){
    let solution = '';
      for(let i = 0; i < one.length; i++){
        solution += one[i] + two[i] + three[i]
      }
      return solution
     }