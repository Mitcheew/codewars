function generateRange(min, max, step){
    let steps = [];
  for (let i = min; i <= max; i += step) {
   steps.push(i);
  }
    return steps;
  }
  //https://www.codewars.com/kata/55eca815d0d20962e1000106