import Vue from 'vue';

const namespaced = true;

const actions = {
  show (store, message) {
    Vue.prototype.$noty.show(message);
  },
  success (store, message) {
    Vue.prototype.$noty.success(message);
  },
  error (store, message) {
    Vue.prototype.$noty.error(message);
  },
  warning (store, message) {
    Vue.prototype.$noty.warning(message);
  },
  info (store, message) {
    Vue.prototype.$noty.info(message);
  }
};

export default {
  namespaced, actions
};
