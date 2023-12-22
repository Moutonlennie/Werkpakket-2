// BevestigingPagina.vue
<template>
  <div class="container-bevestigen">
    <div class="bedankt">
      <h1>{{ bedanktTekst }}</h1>
    </div>
    <div v-if="winkelwagenProducten.length > 0" class="product-lijst-bevest">
      <div v-for="(product, index) in winkelwagenProducten" :key="index">
        <div class="product-foto">
          <img v-bind:src="product.image" alt="Product image">
        </div>
        <div class="product-item">
          <h2>{{ product.productNaam }}</h2>
          <h3>{{ product.productPrijs }}</h3>
        </div>
        <div class="product-tekst">
          <p>{{ product.productBeschrijving }}</p>
          <p>{{ product.productAantal }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Geen producten gevonden in de winkelwagen.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      winkelwagenProducten: [],
    };
  },
  computed: {
    bedanktTekst() {
      return this.winkelwagenProducten.length > 0 ? "Bedankt voor uw bestelling" : "U hebt geen producten in uw winkelwagen";
    },
  },
  mounted() {
    // Haal de winkelwagenProducten op uit de queryparameters van de URL
    const winkelwagenProductenString = this.$route.query.winkelwagenProducten;
    if (winkelwagenProductenString) {
      this.winkelwagenProducten = JSON.parse(winkelwagenProductenString);
    }
  },
};
</script>
