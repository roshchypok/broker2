import Vue from 'vue';

const constants = {
  forms: {
    cancel: Symbol.for('formCancel'),
    submit: Symbol.for('formSubmit'),
    yes: Symbol.for('formYes'),
    no: Symbol.for('formNo')
  },
  validator: {
    required: Symbol.for('validatorRequired'),
    number: Symbol.for('validatorNumber')
  }
};

export default {
  install: function () {
    Vue.prototype.$const = constants;
  }
};
