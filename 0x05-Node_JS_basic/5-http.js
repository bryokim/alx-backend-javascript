const http = require("http");
const fs = require("fs");

const database = process.argv[2] || "";

function processCSV(content) {
  const rows = content.split("\n").filter((row) => row !== "");
  const headers = rows.shift().split(",");

  const data = [];
  rows.forEach((row) => {
    const list = row.split(",");
    const rowData = {};

    headers.forEach((header, index) => {
      rowData[header] = list[index];
    });

    data.push(rowData);
  });
  return data;
}

function getFieldsInfo(data) {
  const fieldsInfo = {};

  data.forEach((d) => {
    if (fieldsInfo[d.field]) {
      fieldsInfo[d.field].push(d.firstname);
    } else {
      fieldsInfo[d.field] = [d.firstname];
    }
  });

  return fieldsInfo;
}

function printFieldsInfo(fieldsInfo) {
  let output = "";

  for (const [field, firstnames] of Object.entries(fieldsInfo)) {
    output += `Number of students in ${field}: ${
      firstnames.length
    }. List: ${firstnames.join(", ")}\n`;
  }

  return output.slice(0, -1);
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) return reject(Error("Cannot load the database"));

      const processedCSV = processCSV(data);
      const output = printFieldsInfo(getFieldsInfo(processedCSV));

      return resolve(`Number of students: ${processedCSV.length}\n${output}`);
    });
  });
}

const app = http.createServer();

app.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the list of our students\n");

    countStudents(database)
      .then((data) => res.end(data))
      .catch((error) => res.end(error.toString()));
  }
});

app.listen(1245);

module.exports = app;
