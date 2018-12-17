import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './../components/index.vue';

import Services from './../components/services/services.vue';
import ServiceNew from './../components/services/new.vue';
import ServiceEdit from './../components/services/edit.vue';
import ServiceDestroy from './../components/services/destroy.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/services',
    component: Services,
    children: [
      {
        path: 'new',
        components: {
          dialog: ServiceNew
        }
      },
      {
        path: ':id/edit',
        components: {
          dialog: ServiceEdit
        }
      },
      {
        path: ':id/destroy',
        components: {
          dialog: ServiceDestroy
        }
      }
    ]
  },
  {
    path: '/',
    component: HomePage
  }
];

export default new VueRouter({
  routes
});
