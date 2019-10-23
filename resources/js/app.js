require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from './routes';

// import AdminHome from './components/admin/AdminHome.vue';
// Vue.component('home', AdminHome);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue'));

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
}) 

const app = new Vue({
    el: '#app',
    router
});
