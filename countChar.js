//https://www.codewars.com/kata/57a6633153ba33189e000074
var orderedCount = function (text) {
    let countChar = [[]];
    for(let i = 0; i < text.length; i ++){
      for(let j = 0; j <= countChar.length; j++){
        if(countChar[j].indexOf(text[i]) === 0){
          countChar[j][1] += 1;
          break;
        } else if (j === countChar.length - 1 && countChar[countChar.length - 1].indexOf(text[i]) === -1){
          countChar.push([text[i], 0])
        }
      }
    
    }
    countChar.shift()
    return countChar;
  }