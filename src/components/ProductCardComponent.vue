<template>
<div v-for="product in products" :key="product.id" class="card" :class="[product.gender, product.stijl]"  >
  <a @:click="mojiSpecifiek(product.id)">
    <div class="card-photo">
      <img  v-bind:src="product.image">
    </div>
    <div class="card-content">
      <h3>{{ product.title }}</h3>
      <!-- <p>{{ product.description }}</p> -->
      <p>Prijs: {{ product.price }} euro</p>
    </div>
  </a>
</div>
  </template>
  
  <script>
  export default {
    methods: {
    mojiSpecifiek(id) {
        this.$router.push({ name: 'mojiSpecifiek', params: { id: id } });
      console.log(id);
    }
  },
    data() {
      return {  
        products: []
      };
    },
    mounted() {
      // Haal het JSON-bestand op met fetch
      fetch("/products.json")
        .then(response => response.json())
        .then(data => {
          this.products = data.products;
        })
        .catch(error => console.error("Fout bij het ophalen van gegevens:", error));
    },
  };
  </script>
