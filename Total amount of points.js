//https://www.codewars.com/kata/5bb904724c47249b10000131
function points(games) {
    // your code here
    let scores = [];
    let total = 0;
    for(let i = 0; i < games.length; i++){
    scores[i] = games[i].split(':')
      if(scores[i][0] > scores[i][1]){
        total += 3;
      } else if(scores[i][0] === scores[i][1]){
        total += 1;
      }
    }
    return total;
  }