//https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
    let final = "";
    for(let i = 0; i < this.length; i++){
    if(this[i].toUpperCase() === this[i]){
      final += this[i].toLowerCase()
    } else {
      final += this[i].toUpperCase() 
    }
    };
    return final
  }