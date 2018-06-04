<template>
  
  <div class="home">
  <button 
    class="btn btn-info" 
    v-on:click="showMenu" 
  >Menu</button>
  <span v-show="enableShowMenuBtn">
    <aside class="menu fixed">
      <p class="menu-label">
        Products
      </p>
      <ul class="menu-list">
        <li><router-link to="/products">T shirts</router-link></li>
        <li><a>Shorts</a></li>
        <li><a>Shoes</a></li>
      </ul>
    </aside>  
  </span>
    <div class="hello">
      <h1>{{name}}</h1>
      <p class="description" v-bind:class="{ 'red': isRed }">{{description}}</p>
      <button v-on:click="increment">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>

</template>

<script>
export default {
  
  data: function () {
    return {
      name: 'Store',
      description: 'A place to learn Vue.js',
      counter: 0,
      isRed: false,
      enableShowMenuBtn: false
    }
  },
  name: 'home',
  methods: {
    increment: function () {
      this.counter += 1
      this.isRed = !this.isRed
    },
    showMenu: function() {
      this.enableShowMenuBtn = !this.enableShowMenuBtn
    }
  }
};

</script>

<style scoped>

p {
  color: red;
}

.red {
  color: green;
}

.fixed { 
  position: fixed; 
  left:0; 
  top:50; 
  width:100px; 
  height:100px;
}

</style>

