export default function cleanSet(set, startString) {
  const array = [];
  const str = startString.trim();

  if (str === '') {
    return '';
  }

  set.forEach((value) => {
    if (value.startsWith(str)) array.push(value.substring(str.length));
  });

  return array.join('-');
}
