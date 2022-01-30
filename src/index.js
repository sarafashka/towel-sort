
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arrSorted = [];
  if (matrix === undefined) {
    return arrSorted
  }
  matrix.forEach((item,index) => {
    if(index % 2 === 0) {
      item.forEach((element) => {
      arrSorted.push(element)
    })
    } else item.reverse().forEach(element => {
       arrSorted.push(element)
    })
  })
  return arrSorted;
}
