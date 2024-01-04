export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(update) {
    this._currency = update;
  }

  set amount(update) {
    this._amount = update;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
