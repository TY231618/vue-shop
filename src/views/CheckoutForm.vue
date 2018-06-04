<template>
  <div class="checkout">
    <h1>Checkout Form</h1>
    <center>
    
      <form class="feedback-form" @submit="checkForm">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
        <input placeholder="First Name" type="text" v-model="firstName" />
        <input placeholder="Last Name" type="text" v-model="lastName" />
        <input placeholder="Contact Number" type="text" v-model="number" />
      
        <label>
          <input type="checkbox" id="checkbox" />
          <span for="checkbox">{{checked}}</span>
        </label>
        <p>
          <input type="submit" value="Submit">  
        </p>
      </form>
    </center>
  </div>
</template>

<script>

module.exports = {
  data: function () {
    return {
      firstName: '',
      lastName: '',
      number: '',
      checked: 'Receive Offers?',
      errors:[]
    }
  },
  name: 'checkout',
  methods: {
    checkForm: (e) => {
      if(this.firstName && this.lastName) return true;
      this.errors = [];
      if(!this.firstName < 2) this.errors.push("First name required.");
      if(!this.lastName < 2) this.errors.push("Last name required.");
      e.preventDefault();
    }
  }
};

</script>

<style>
.feedback {
  text-align: center;
}
.feedback-form {
  max-width: 300px;
}

</style>