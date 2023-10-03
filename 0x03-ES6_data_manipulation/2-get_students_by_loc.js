export default function getStudentsByLocation(array, city) {
  const students = array.filter((student) => student.location === city);

  return students;
}
