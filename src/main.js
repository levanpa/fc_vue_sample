import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import ProductDetail from "./components/ProductDetail.vue";
import Login from "./components/parts/Login.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/product-detail', component: ProductDetail },
  { path: '/login', component: Login },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  setTimeout(() => next(), 100);
});

// init vue app
const vueApp = createApp(App);

vueApp.mixin({
  methods: {
    log: (...data) => console.log(...data)
  }
});

vueApp.use(router);
vueApp.mount('#app');