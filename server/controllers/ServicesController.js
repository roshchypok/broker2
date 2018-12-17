const Service = require('./../models/service')

class ServicesController {
  constructor () {
    this.table = 'services';
  }

  index (params = {}) {
    return Service.all;
  }

  new () {
    return {
      result: 'success',
      service: new Service().attributes
    };
  }

  create (params ={}) {
    let rez = {}
    if (Service.create(params.service)) {
      rez.result = 'success';
      rez.flash = 'Сервіс успішно створено';
    } else {
      rez.result = 'error';
      rez.flash = 'Помилка створення сервісу';
      rez.errors = service.errors;
    };
    return rez;
  }

  show (id) {
    const service = Service.find(id);
    let rez = {};
    if (service) {
      rez.result = 'success';
      rez.service = service.attributes;
    } else {
      rez.result = 'error';
      rez.flash = `Сервіс з id = [${id}] не знайдено`;
    };
    return rez;
  }

  update (params ={}) {
    const service = Service.find(params.id);
    let rez = {}
    if (service.update(params.service)) {
      rez.result = 'success';
      rez.flash = 'Сервіс успішно оновлено'
    } else {
      rez.result = 'error';
      rez.flash = 'Помилко оновлення сервісу';
      rez.errors = service.errors;
    };
    return rez;
  }

  destroy (id) {
    const service = Service.find(id);
    let rez = {};
    if (service.destroy()) {
      rez.result = 'success';
      rez.flash = 'Сервіс успішно видалено';
    } else {
      rez.result = 'error';
      rez.flash = 'Помилка видалення сервісу';
      rez.errors = service.errors;
    }
    return rez;
  }
}

module.exports = ServicesController;
