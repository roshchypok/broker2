function createErrorMsg (title, msg, defaultMsg) {
  return `${title ? `${title} ` : ''}${msg || defaultMsg}`;
}

export default {
  required: (model, field) => {
    const value = model[field];
    if (!value || value.length === 0) {
      model.addErrorFor(
        field,
        createErrorMsg(
          model.validator[field].title,
          model.validator[field].msg,
          'обов\'язкове поле'
        )
      );
      return false;
    } else {
      model.clearErrorFor(field);
      return true;
    }
  },
  number: (model, field) => {
    const value = model[field];
    if (value && isNaN(value)) {
      model.addErrorFor(
        field,
        createErrorMsg(
          model.validator[field].title,
          model.validator[field].msg,
          'мусить бути числом'
        )
      );
      return false;
    } else {
      model.clearErrorFor(field);
      return true;
    }
  }
};
