<template>
  <div>
    <p>{{product.name}}</p>
      <figure class="image is-4by3">
      <img :src="product.image" >
    </figure>
    <p>£{{product.price}}</p>
    <p>{{product.short_desc}}</p>
    <button class="waves-effect waves-light btn" @click="addToBasket"><i class="material-icons">add_shopping_cart</i></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    name: 'product',
    props: [
      'product'
    ],
    methods: {
      addToBasket() {
        this.$store.commit('addToBasket', this.product)
      }  
    }
  }
</script>
