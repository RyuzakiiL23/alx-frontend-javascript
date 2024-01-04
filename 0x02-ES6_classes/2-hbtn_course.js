export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(update) {
    if (typeof update !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = update;
    }
  }

  get length() {
    return this._length;
  }

  set length(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = num;
    }
  }

  get students() {
    return this._students;
  }

  set students(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = arr;
    }
  }
}
