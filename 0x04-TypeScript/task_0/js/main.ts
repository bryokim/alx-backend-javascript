interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Brian',
  lastName: 'kim',
  age: 10,
  location: 'Here',
};

const student2: Student = {
  firstName: 'Luis',
  lastName: 'Juan',
  age: 9,
  location: 'There',
};

const studentsList: Student[] = [student1, student2];

// Create table and add students
const table = document.createElement('table');
const headerRow = document.createElement('tr');

for (const key of Object.keys(student1)) {
  const header = document.createElement('th');
  header.innerHTML = key;

  headerRow.appendChild(header);
}

table.appendChild(headerRow);

studentsList.forEach((student) => {
  const studentRow = document.createElement('tr');

  for (const value of Object.values(student)) {
    const data = document.createElement('td');

    data.innerHTML = value;
    studentRow.appendChild(data);
  }

  table.appendChild(studentRow);
});

document.body.appendChild(table);
