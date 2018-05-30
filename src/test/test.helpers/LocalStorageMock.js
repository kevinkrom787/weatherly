
class LocalStorageMock {
  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
    this.length = 0;
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
    this.length = this.calculateLength();
  }

  removeItem(key) {
    delete this.store[key];
    this.length = this.calculateLength();
  }

  calculateLength() {
    return Object.keys(this.store).length;
  }

};


export default LocalStorageMock;