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
    if (typeof value === 'string' && value.startsWith(startString)) {
      const substring = value.substring(startString.length);

      if (substring) array.push(substring);
    }
  });

  return array.join('-');
}
