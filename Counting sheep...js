//https://www.codewars.com/kata/54edbc7200b811e956000556
const countSheeps = (a) => a.reduce((acc, val) => val? acc + 1 : acc, 0)