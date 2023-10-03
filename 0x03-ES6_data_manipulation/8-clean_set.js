export default function cleanSet(set, startString) {
  const array = [];

  if (startString === '') {
    return '';
  }

  set.forEach((value) => {
    if (value.startsWith(startString))
      array.push(value.substring(startString.length));
  });

  return array.join('-');
}
