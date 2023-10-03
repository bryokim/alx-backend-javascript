export default function updateStudentGradeByCity(
  studentsArray,
  city,
  newGrades
) {
  const updatedStudents = studentsArray
    .filter((student) => student.location == city)
    .map((student) => {
      const studentGrade = newGrades.filter(
        (newGrade) => newGrade.studentId == student.id
      );

      student['grade'] = studentGrade.length ? studentGrade[0].grade : 'N/A';

      return student;
    });

  return updatedStudents;
}
