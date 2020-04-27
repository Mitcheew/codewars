//https://www.codewars.com/kata/5276c18121e20900c0000235
const findNumber = array => {
    const totalLength = array.length + 1
    const totalSum = (totalLength * (totalLength + 1)) / 2
    const currentSum = array.reduce((acc, num) => acc + num, 0)
    return totalSum - currentSum
  }