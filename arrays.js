var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.shift(ele);
  return arr; 
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele];
}

function destructivelyAddElementFromEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}
