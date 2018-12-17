import Vue from 'vue';

import Modal from './app/modal.vue';

import HomePage from './index.vue';

import Services from './services/services.vue';
import ServiceForm from './services/form.vue';

Vue.component('modal-dialog', Modal);
Vue.component('home-page', HomePage);
Vue.component('services-list', Services);
Vue.component('service-form', ServiceForm);
