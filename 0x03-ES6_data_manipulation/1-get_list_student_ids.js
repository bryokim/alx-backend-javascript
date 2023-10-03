export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];

  const studentIds = array.map((student) => student.id);

  return studentIds;
}
