const express = require("express");

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

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  countStudents(database)
    .then((data) => res.send(`This is the list of our students\n${data}`))
    .catch((error) => res.send(error.toString()));
});

app.listen(1245);

module.exports = app;
