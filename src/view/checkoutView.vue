<script>
import { useProducten } from '@/stores/winkelwagen.js'

export default {
    data() {
    return {
      store: useProducten(),
    }
  },
  computed: {
    winkelwagenProducten() {
      return this.store.productenLijst;
    }
  },
    methods: {
        addToCart() {
            const nieuwProduct = {
                productNaam: this.productNaam,
                productPrijs: this.productPrijs,
                productBeschrijving: this.productBeschrijving,
                productAantal: this.productAantal,
                productImage: this.productImage,
            }

            this.store.addToCart(nieuwProduct);

            this.productNaam = "",
            this.productPrijs = "",
            this.productBeschrijving = "",
            this.productAantal = "",
            this.productImage = ""
        },
        verwijderProduct(index) {
      // Roep de verwijdermethode van de store aan en geef het indexnummer door
      this.store.verwijderProduct(index);
    },
    wijzigAantal(index) {
      // Roep de methode van de store aan om het aantal bij te werken
      this.store.wijzigProductAantal(index, this.winkelwagenProducten[index].productAantal);
    },
    bevestigingform() {
        // Gebruik de router om naar de bevestigingspagina te navigeren en de winkelwagenProducten door te geven
        this.$router.push({ path: '/winkelwagen-bevestiging', query: { winkelwagenProducten: JSON.stringify(this.winkelwagenProducten) } });

        // this.$router.push("/winkelwagen-bevestiging")
    }
    },
}
</script>

<template>
    <div class="container-winkelwagen">
        <div class="checkout-producten">
      <!-- Loop over de producten in de winkelwagen en toon ze -->
      <div class="product-product">
        <h1 v-if="winkelwagenProducten.length === 0" class="geenprod">Geen producten in je winkelwagen</h1>
      <div v-for="(product, index) in winkelwagenProducten" :key="index" class="product-lijst">
        <div class="product-foto">
          <img v-bind:src="product.productImage" alt="Product Image" class="product-image">
        </div>
        <div class="product-item">
          <h2>{{ product.productNaam }}</h2>
          <h3>{{ product.productPrijs }}</h3>
        </div>
        <div class="product-tekst">
          <p>{{ product.productBeschrijving }}</p>
          <p>
          <input type="number" v-model="product.productAantal" min="1" @change="wijzigAantal(index)">
        </p>
        </div>
        <div class="product-verwijderen">
            <svg @click="verwijderProduct(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </div>
      </div>
    </div>
      
        </div>
        <div class="checkout-form">
            <form class="formCheckout">
                <label for="voornaam">Voornaam:</label>
                <input type="text" id="voornaam" name="voornaam" placeholder=" Lennie" required>

                <label for="achternaam">Achternaam:</label>
                <input type="text" id="achternaam" name="achternaam" placeholder=" Mouton" required>

                <label for="straat">Straat:</label>
                <input type="text" id="straat" name="straat" placeholder=" Kouterstraat" required>

                <label for="huisnummer">Huisnummer:</label>
                <input type="text" id="huisnummer" name="huisnummer" placeholder=" 34" required>

                <label for="bus">Bus:</label>
                <input type="text" id="bus" name="bus" placeholder=" a" required>

                <label for="postcode">Postcode:</label>
                <input type="text" id="postcode" name="postcode" placeholder=" 3400" required>

                <label for="gemeente">Gemeente:</label>
                <input type="text" id="gemeente" name="gemeente" placeholder=" Landen" required>

                <button @click="bevestigingform">Verder naar bestellen</button>
            </form>
        </div>
    </div>
</template>
