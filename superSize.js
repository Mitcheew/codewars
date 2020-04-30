//https://www.codewars.com/kata/5709bdd2f088096786000008
function superSize(num){
  return Number(num.toString().split('').sort((a, b) => b - a).join(''))
}