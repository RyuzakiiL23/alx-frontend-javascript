export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }

  const myMap = arg.map((obj) => obj.id);

  return myMap;
}
