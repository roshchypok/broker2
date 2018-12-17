/* eslint-disable*/
import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';
// Axios doesn't include Promise polyfill (e.g. 'es6-promise'), if you need one, here is a good place to initiate it
import VueNoty from 'vuejs-noty'
import './components';
import Globals from './globals';
import axios from 'axios';
Vue.use(Globals);
Vue.use(VueNoty, {
  timeout: 3000,
  progressBar: false,
  theme: 'relax'
});

axios.interceptors.response.use(function (response) {
  if (response.data.flash) store.dispatch(`flash/${response.data.result || 'info'}`, response.data.flash);
  return response;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  components: {
    App
  },
  store,
  router
});
