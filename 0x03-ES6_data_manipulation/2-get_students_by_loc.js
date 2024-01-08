export default function getStudentsByLocation(arg1, arg2) {
  const myFilter = arg1.filter((obj) => obj.location === arg2);
  return myFilter;
}
