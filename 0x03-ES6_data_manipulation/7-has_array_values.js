export default function hasValuesFromArray(set, array) {
  let x = true;

  for (const value of array) {
    if (!set.has(value)) {
      x = false;
      break;
    }
  }

  return x;
}
