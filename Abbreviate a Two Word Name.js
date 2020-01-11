//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){

    let splitName = name.split(' ');
    console.log(splitName)
    return splitName[0][0].toUpperCase() + '.' + splitName[1][0].toUpperCase()

}