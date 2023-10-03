export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || !typeof startString === 'string'
  ) {
    return '';
  }

  const array = [];
  const str = startString.trim();

  if (str === '') {
    return '';
  }

  set.forEach((value) => {
    if (typeof value === 'string') {
      if (value.startsWith(str)) array.push(value.substring(str.length));
    }
  });

  return array.join('-');
}
