import readDatabase from "../utils";

class StudentsController {
  static getAllStudents(request, response) {
    let output = "This is the list of our students\n";

    const database = process.argv[2];

    readDatabase(database)
      .then((data) => {
        for (let [k, v] of Object.entries(data)) {
          output += `Number of students in ${k}: ${v.length}. List: ${v.join(
            ", "
          )}\n`;
        }
        response.status(200);
        response.send(output.slice(0, -1));
      })
      .catch((error) => {
        response.status(500);
        response.send(`Cannot load the database`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    const database = process.argv[2];

    if (major !== "CS" && major !== "SWE") {
      response.status(500);
      response.send("Major parameter must be CS or SWE");
    } else {
      readDatabase(database)
        .then((data) => {
          response.status(200);
          response.send(`List: ${data[major].join(", ")}`);
        })
        .catch((error) => {
          response.status(500);
          console.log(error);
          response.send("Cannot load the database");
        });
    }
  }
}

export default StudentsController;
