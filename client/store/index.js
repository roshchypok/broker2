import Vue from 'vue';
import Vuex from 'vuex';

import services from './modules/services';
import flash from './modules/flash';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    services, flash
  },
  strict: process.env.NODE_ENV !== 'production'
});
