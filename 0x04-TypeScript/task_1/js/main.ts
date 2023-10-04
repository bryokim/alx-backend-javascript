interface Teacher {
  //Readonly attributes
  readonly firstName: string;
  readonly lastName: string;

  // Must be defined
  fullTimeEmployee: boolean;
  location: string;

  // Optional attribute
  yearsOfExperience?: number;

  // Any other attribute
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  description: string;
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
) {
  return firstName[0] + '. ' + lastName;
};

printTeacher.description = "Prints Teacher's name";

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  // properties
  firstName: string;
  lastName: string;

  // methods
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
