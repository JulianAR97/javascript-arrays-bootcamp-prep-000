function addElementToBeginningOfArray(arr, ele) {
  return [...arr].shift(ele);
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.shift(ele);
}
