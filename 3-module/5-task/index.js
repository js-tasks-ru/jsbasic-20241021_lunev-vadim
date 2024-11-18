function getMinMax(str) {
  let numbersArray = str.split(' ').filter(item => Number(item)).map(Number);
  return {min: Math.min(...numbersArray), max: Math.max(...numbersArray)};
}
