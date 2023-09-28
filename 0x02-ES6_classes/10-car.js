export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('Brand must be a string');
    // }

    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('Motor must be a string');
    // }

    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    // if (typeof value !== 'string') {
    //   throw TypeError('Color must be a string');
    // }

    this._color = value;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
