//https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x){
    let matches = x.join('').match(/good/gi) || [];
    return matches.length === 0 ? 'Fail!' : matches.length > 2 ? 'I smell a series!' : 'Publish!'
    }