const LowdbModel = require('./lowdb-model');

class Service extends LowdbModel {

  get defaultAttributes() {
    return {
      id: null,
      title: null,
      description: null,
      price: null,
      active: true,
      inForm: true
    }
  }
}

module.exports = Service;
