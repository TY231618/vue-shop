<template>
  <div class="products">
    <h1>Products</h1>
    <div class="columns">
      <div class="column" v-for="product in productList">
        <product-component :product="product" ></product-component>
      </div>
    </div>
  </div>
</template>


<script>
  import products from '../../data/products.json'
  import Product from '../components/Product.vue'
 
  export default{
      data(){
        return{
          productList: products
        }
      },
      name: 'products',
      props: [
        'product'
      ],
      components: {
        'product-component': Product
      }
  }
</script>

<style>

</style>