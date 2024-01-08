export default function cleanSet(set, Str) {
  if (Str === undefined || Str.length === 0) {
    return '';
  }
  const matches = [];
  for (const value of set) {
    if (value.startsWith(Str)) {
      matches.push(value.slice(Str.length));
    }
  }
  return matches.join('-');
}
