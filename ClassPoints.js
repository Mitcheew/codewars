//https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((x, y) => x+=y) + yourPoints) / (classPoints.length + 1) < yourPoints
  }