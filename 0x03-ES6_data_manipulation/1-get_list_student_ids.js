export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  } 

  const myMap = arg.map((obj) => {
    return obj.id;
  });

  return myMap;
}
