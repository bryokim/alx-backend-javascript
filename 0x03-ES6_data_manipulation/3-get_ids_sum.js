export default function getStudentIdsSum(array) {
  const idSum = array.reduce((idSum, student) => (idSum += student.id), 0);

  return idSum;
}
