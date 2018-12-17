import AbstractForm from './abstract-form';

export default class Service extends AbstractForm {
  constructor (params) {
    super();
    this.id = params.id || 'new-record';
    this.title = params.title;
    this.description = params.description;
    this.price = params.price;
    this.active = !!params.active;
    this.inForm = !!params.inForm;

    this.validator = {
      title: {
        checks: 'required',
        title: 'Назва'
      },
      price: {
        checks: 'required number',
        title: 'Вартість'
      }
    };
  }

  get params () {
    const result = this.id === 'new-record' ? {} : {id: this.id};
    result.service = {
      title: this.title,
      description: this.description,
      price: this.price,
      active: this.active,
      inForm: this.inForm
    };
    return result;
  }
}
