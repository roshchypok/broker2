import validators from './validators';

const breakEx = {};

export default class AbstractForm {
  constructor () {
    this.errors = [];
    this.liveValidator = false;
    this.validator = null;
  }

  get params () {
    return {};
  }

  get hasValidator () {
    return !!this.validator;
  }

  get isValid () {
    this.validate();
    return Object.keys(this.errors).length === 0;
  }

  validate () {
    if (this.hasValidator) {
      Object.keys(this.validator).forEach((field) => {
        const data = this.validator[field];
        if (data.checks) {
          try {
            data.checks.split(' ').forEach((check) => {
              const validator = validators[check];
              const rez = validator ? validator(this, field) : true;
              if (!rez) throw breakEx;
            });
          } catch (e) {
            if (e !== breakEx) throw e;
          }
        }
      });
      this.liveValidator = true;
    }
  }

  hasErrorFor (field) {
    return this.errors.some((e) => e.field === field);
  }

  errorFor (field) {
    return this.errors.find((e) => e.field === field);
  }

  errorMsgFor (field) {
    const error = this.errorFor(field);
    return error ? error.msg : null;
  }

  addErrorFor (field, msg) {
    this.clearErrorFor(field);
    this.errors.push({field: field, msg: msg});
  }

  clearErrorFor (field) {
    const oldError = this.errorFor(field);
    if (oldError) {
      const index = this.errors.indexOf(oldError);
      this.errors.splice(index, 1);
    };
  }
}
