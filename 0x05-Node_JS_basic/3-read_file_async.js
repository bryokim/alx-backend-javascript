const fs = require('fs');

function processCSV(content) {
  const rows = content.split('\n').filter((row) => row !== '');
  const headers = rows.shift().split(',');

  const data = [];
  rows.forEach((row) => {
    const list = row.split(',');
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
  for (const [field, firstnames] of Object.entries(fieldsInfo)) {
    process.stdout.write(
      `Number of students in ${field}: ${
        firstnames.length
      }. List: ${firstnames.join(', ')}\n`,
    );
  }
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) return reject(Error('Cannot load the database'));

      const processedCSV = processCSV(data);

      process.stdout.write(`Number of students: ${processedCSV.length}\n`);

      printFieldsInfo(getFieldsInfo(processedCSV));

      return resolve();
    });
  });
}

module.exports = countStudents;
