export default class Currency {
  constructor(code, name) {
    this._name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(update) {
    this._name = update;
  }

  set code(update) {
    this._code = update;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
