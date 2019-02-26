module.exports = function getZerosCount(number, base) {
  let item = 2
  let len = Math.sqrt(base)
  let sqr = []
  let numsqr = []

  while (item <= len) {

    if (base % item === 0) {
      sqr.push(0)
      numsqr.push(item)
    }

    while (base % item === 0) {
      base = Math.trunc(base / item)
      len = Math.sqrt(base)
      sqr[sqr.length-1]++
    }
    
    item++
  }

  if (base !== 1) {
    sqr.push(1)
    numsqr.push(base)
  }

  let answer = 1e9;
  len = sqr.length;

  for (let i=0; i<len; i++) {
    let item = numsqr[i]
    let result = 0;
    
    while (number / item) {
      result += Math.trunc(number / item)
      item *= numsqr[i]
    }      

    result /= sqr[i]
    answer = Math.min(Math.trunc(result), answer)
  }
  return answer
}