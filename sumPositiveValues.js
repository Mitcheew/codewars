//https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.reduce((acc, cv) => {
      return acc += cv > 0? cv : 0;
    }, 0)
  }