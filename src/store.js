import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basket: [],
    total: 0
  },
  mutations: {
    addToBasket: (state, product) => {
      state.basket.push(product)
      state.total = state.total + product.price
    },
    removeItemFromBasket: (state, product) => {
      state.total = state.total - product.price
      state.basket = state.basket.filter(item => {
        return item.id !== product.id
      })
    }
  },
  actions: {
  },
});