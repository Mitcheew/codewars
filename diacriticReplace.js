//https://www.codewars.com/kata/57ab2d6072292dbf7c000039
function correctPolishLetters (string) {
    const correction = [
    {'base': 'a', 'letter': /[ą]/g},
    {'base': 'c', 'letter': /[ć]/g},
    {'base': 'e', 'letter': /[ę]/g},
    {'base': 'l', 'letter': /[ł]/g},
    {'base': 'n', 'letter': /[ń]/g},
    {'base': 'o', 'letter': /[ó]/g},
    {'base': 's', 'letter': /[ś]/g},
    {'base': 'z', 'letter': /[ź]/g},
    {'base': 'z', 'letter': /[ż]/g}
    ];
      for(let i = 0; i < correction.length; i++){
        string = string.replace(correction[i].letter, correction[i].base)
      }
      return string
    }