export default function hasValuesFromArray(Set, Array) {
  const trueOrFalse = [];
  Array.map((elem) => {
    if (!Set.has(elem)) {
      trueOrFalse.push(false);
    } else {
      trueOrFalse.push(true);
    }
    if (trueOrFalse.includes(false)) {
      return false;
    }
    return true;
  });
}
