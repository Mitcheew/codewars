//https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b){
    if(r < 0) {
      r = 0;
    } else if(r > 255) {
      r = 255
    }
    if(g < 0) {
      g = 0;
    } else if(g > 255) {
      g = 255
    }
    if(b < 0) {
      b = 0;
    } else if(b > 255) {
      b = 255
    }
    let hex = [Number(r).toString(16), Number(g).toString(16), Number(b).toString(16),]
    console.log(hex)
    for(let i = 0; i < hex.length; i++){
    if (hex[i].length < 2) {
         hex[i] = "0" + hex[i];
    }
    }
    return hex.join('').toUpperCase(); 
  }