//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd
function getNiceNames(people){
    let nice = [];
    people.map(x => x.wasNice ? nice.push(x.name) : null)
    return nice
  }
  
  function getNaughtyNames(people){
    let naughty = [];
    people.map(x => x.wasNice ? null : naughty.push(x.name))
    return naughty
  }