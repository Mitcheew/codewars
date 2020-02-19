//https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  return (pontoonDistance / youSpeed < sharkDistance / (sharkSpeed * (dolphin ? .5 : 1) ) ) ? "Alive!" : "Shark Bait!"
}