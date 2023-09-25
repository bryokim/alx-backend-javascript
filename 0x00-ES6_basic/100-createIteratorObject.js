export default function createIteratorObject(report) {
  class ReportIterator {
    constructor(report) {
      this.employeesListLength = Object.keys(report.allEmployees).length;
      this.i = 0;
      this.departmentEmployees = Object.values(report.allEmployees)[this.i];
      this.j = 0;
    }

    next() {
      if (this.i === this.employeesListLength) return { done: true };

      const value = this.departmentEmployees[this.j];
      this.j += 1;

      if (this.j === this.departmentEmployees.length) {
        this.j = 0;
        this.i += 1;
        this.departmentEmployees = Object.values(report.allEmployees)[this.i];
      }

      return { value, done: false };
    }
  }

  const reportObject = report;
  reportObject[Symbol.iterator] = () => new ReportIterator(report);

  return reportObject;
}
