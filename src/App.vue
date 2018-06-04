<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/checkout">Checkout</router-link>
      <basket-component class="basket" :shipping="shipping" :total="total" :basket="basket"></basket-component>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
  import store from './store.js';
  import Basket from './components/Basket.vue'

  export default {
    data(){
      return{
        basket: store.state.basket,
        total: store.state.total
      }
    },
    name: 'app',
    computed: {
      shipping() {
        return store.state.total >= 100  ? 'Free' : '£9.99';
      }
    },
    components: {
      'basket-component': Basket
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.basket {
  border: 1px solid black;
  border-radius: 5px;
  width: 250px;
  margin: 0 auto;
}

</style>
