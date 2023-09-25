export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const item of reportWithIterator) {
    str += `${item} | `;
  }
  str = str.slice(0, -3);

  return str;
}
