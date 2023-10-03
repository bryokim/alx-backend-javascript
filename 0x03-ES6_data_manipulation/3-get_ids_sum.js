export default function getStudentIdsSum(array) {
  const idSum = array.reduce((acc, student) => {
    const sum = acc + student.id;
    return sum;
  }, 0);

  return idSum;
}
