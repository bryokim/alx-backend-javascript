export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || !typeof startString === 'string'
    || startString.trim() === ''
  ) {
    return '';
  }

  const array = [];

  set.forEach((value) => {
    if (typeof value === 'string') {
      if (value.startsWith(startString)) array.push(value.substring(startString.length));
    }
  });

  return array.join('-');
}
