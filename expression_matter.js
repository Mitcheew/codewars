//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
      
    // Should be 9 possible cases? 
       return a === 1 ? //A = 1
                b === 1 ? //A = 1, B = 1
                  c === 1 ? 3 //A = 1, B = 1, C = 1 return 3
                  : (a + b) * c // A = 1, B = 1, C > 1 return
                : c === 1 ? a + b + c // A = 1, B > 1, C = 1 return
                  : (a + b) * c // A = 1, B > 1, C > 1 return
              : b === 1 ? //A > 1, B = 1
                  c === 1 ? a * (b + c) //A > 1, B = 1, C = 1 return
                  : a > c ? a * (b + c) //A > C > 1, B = 1, C > 1 return
                    : (a + b) * c // A > 1, B = 1, C > A > 1 return
                : c === 1 ? a * (b + c) //A > 1, B > 1, C = 1 return
                  : a * b * c //A > 1, B > 1, C > 1 return
                
                
    }