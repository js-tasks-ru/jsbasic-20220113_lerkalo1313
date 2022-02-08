function getMinMax(str) {
  let result = str.split(' ').filter((item) => !isNaN(+item)).map((num) => +num).sort((a, b) => a - b)
  
  return {
    min: result[0], 
    max: result[result.length - 1]
  }
 }
 
