export default function getStudentIdsSum(arg) {
  const myReduce = arg.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.id;
  }, 0);
  return myReduce;
}
