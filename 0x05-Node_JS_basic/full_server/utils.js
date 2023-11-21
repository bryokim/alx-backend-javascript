import { readFile } from 'fs';

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

function sortFieldsInfo(fieldsInfo) {
  const sortedKeys = Object.keys(fieldsInfo).sort();

  const sortedFieldsInfo = {};
  for (const key of sortedKeys) {
    sortedFieldsInfo[key] = fieldsInfo[key];
  }
  return sortedFieldsInfo;
}

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) return reject(Error('Cannot load the database'));

      const processedCSV = processCSV(data);
      const fieldsInfo = getFieldsInfo(processedCSV);

      return resolve(sortFieldsInfo(fieldsInfo));
    });
  });
}

export default readDatabase;
