export default function createIteratorObject(report) {
  const objValues = [];
  for (const val of Object.values(report.allEmployees)) {
    objValues.push(...val);
  }
  return objValues;
}
