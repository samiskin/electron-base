import fs from 'fs';


class LocalStorage {

  constructor(location = null) {
    this.storageLocation = location || `${process.cwd()}/static/storage.json`;
    try {
      this.storedData = JSON.parse(fs.readFileSync(this.storageLocation));
    } catch (e) {
      console.error(`Couldn't load ${this.storageLocation}: ${e.message}`); //eslint-disable-line
      this.storedData = {};
    }
  }

  getItem(key) {
    return this.storedData[key];
  }

  setItem(key, value) {
    this.storedData[key] = value;
    this.save();
  }

  save() {
    try {
      fs.writeFileSync(this.storageLocation, JSON.stringify(this.storedData));
    } catch (e) {
      console.error(`Couldn't save ${this.storageLocation}: ${e.message}`); //eslint-disable-line
    }
  }

}

export default new LocalStorage();
