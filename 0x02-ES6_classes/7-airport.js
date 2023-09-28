export default class Airport {
  constructor(name, code) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw TypeError('Code must be a string');
    }

    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }

    this._name = value;
  }

  toString() {
    return this._code;
  }
}
