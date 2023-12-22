<template>
  <main v-for="product in products" :key="product.id">
    <div class="detail-container" v-if="product.id == $route.params.id">
      <div class="detail-left">
        <img v-bind:src="product.image" alt="Product Image">
      </div>

      <div class="detail-right">
        <div class="detail-titel">
          <h3 @click="toggleDescription" :class="{ 'active': showDescription }">Beschrijving</h3>
          <h3 @click="toggleFeatures" :class="{ 'active': !showDescription }">Kenmerken</h3>
        </div>

        <div class="detail-beschrijving" v-show="showDescription" id="detail-beschrijving">
          <p class="description">{{ product.description }}</p>
        </div>
        
        <div class="detail-kenmerken" v-show="!showDescription" id="detail-kenmerken">
          <ul>
            <li v-if="product.features && product.features.length">
              <ul>
                <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
              </ul>
            </li>
            <li v-else>No features available</li>
          </ul>
        </div>

        <label for="aantal"><h3>Aantal:</h3></label>
        <input class="inputVeld" type="number" id="aantal" name="aantal" v-model="selectedQuantity" :max="product.stock_quantity" min="1">
        <h2>€ {{ product.price }}</h2>

        <h1 v-show="product.stock_quantity <= 0" style="color: #ff6b6b; font-weight: bolder;">Uitverkocht</h1>

        <button type="button" @click="addToCart(product)" v-show="product.stock_quantity > 0">In winkelwagen</button>
        <button type="button" v-show="product.stock_quantity <= 0" disabled>Uitverkocht</button>
      </div>
    </div>
  </main>
</template>

<script>
import { useProducten } from '@/stores/winkelwagen.js'

export default {
  
  data() {
    return {
      store: useProducten(),
      products: [],
      showDescription: true,
      selectedQuantity: 1,
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
  methods: {
    toggleDescription() {
      this.showDescription = true;
    },
    toggleFeatures() {
      this.showDescription = false;
    },
    addToCart(product) {
      this.store.addToCart({
        productNaam: product.title,
        productPrijs: product.price,
        productBeschrijving: product.description,
        productAantal: this.selectedQuantity,
        productImage: product.image
        // Voeg andere productgerelateerde gegevens toe indien nodig
      });
      
    },
  },
};
</script>
<style scoped>
.detail-titel h3 {
  cursor: pointer;
  user-select: none;
}

.detail-titel h3.active {
  border-bottom: 3px solid #68c3c0;
}

.detail-kenmerken {
  display: none;
}

.detail-kenmerken ul {
  list-style-type: none;
  padding: 0;
}

.detail-kenmerken ul li {
  margin-bottom: 5px;
}
.inputVeld {
  background-color: #68c3c0;
    /* Klur vijf */
    color: #dfe6e9;
    /* kleur twee */
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 0 10px 0 0;
}
</style>
