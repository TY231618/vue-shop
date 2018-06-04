import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import ProductList from './views/ProductList';
import CheckoutForm from './views/CheckoutForm'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutForm
    }
  ],
});
