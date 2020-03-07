//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade (s1, s2, s3) {
    let mean = (s1 + s2 + s3) / 3;
    return mean >= 90 ? 'A'
          : mean >= 80 ? 'B'
          : mean >= 70 ? 'C'
          : mean >= 60 ? 'D'
          : 'F'
  }