<template>
  <div class="basket">
    <h4>Basket:</h4>
    <slot v-if="basket.length > 0">
      <div class="basket-item" v-for="product in basket">
        <div class="item-name">
          {{product.name}}
        </div>
        <div>
          <button class="waves-effect waves-light btn" @click="removeItemFromBasket(product)" ><i class="material-icons">cancel</i></button>
          <button class="waves-effect waves-light btn"><router-link to="/checkout">Checkout</router-link></button>
        </div>
      </div>
      <p class="basket-size">number of Items: {{basket.length}}</p>
      <p>Total: £ {{total}}</p>
      <p>shipping cost: {{shipping}}</p>
    </slot>
    <slot v-if="basket.length == 0">
      <p>Buy something tight ass</p>
    </slot>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    name: 'basket',
    props: [
      'shipping',
      'product'
    ],
    methods: {
      removeItemFromBasket(product) {
        this.$store.commit('removeItemFromBasket', product)
      }
    },
    computed: {
      ...mapState([
        'basket',
        'total'
      ])
    }
  }
</script>

<style>

</style>
