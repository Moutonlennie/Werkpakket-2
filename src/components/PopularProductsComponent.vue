<template>
<div v-for="product in topProducts" :key="product.id" class="card">
    <a @:click="mojiSpecifiek(product.id)">
        <img  v-bind:src="product.image">
        <h3 class="productTitleHome">{{ product.title }}</h3>
        <p class="productTitleHome">{{ product.price }}</p>
    </a>
</div>
</template>
  
  <script>
  // Importeer je JSON-bestand
  import productsJson from "../../products.json";
  
  export default {
    data() {
      return {
        // Gebruik de data van je JSON-bestand
        products: productsJson.products,
      };
    },
    computed: {
      topProducts() {
        return this.products
          .sort((a, b) => b.stock_quantity - a.stock_quantity)
          .slice(0, 3);
      },
    },
    methods: {
    mojiSpecifiek(id) {
        this.$router.push({ name: 'mojiSpecifiek', params: { id: id } });
      console.log(id);
    }
  },
  };
  </script>
  