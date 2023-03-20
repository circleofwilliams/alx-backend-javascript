export default function appendToEachArrayValue(array, appendString) {
  const keys = array.keys();
  for (let idx of keys) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
