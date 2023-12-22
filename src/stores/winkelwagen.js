import { defineStore } from "pinia";

export const useProducten = defineStore('Winkelwagen', {
    state: () => ({
        productenLijst: [],
    }),
    actions: {
        addToCart(product) {
            // Voeg het nieuwe product toe aan de lijst
            this.productenLijst.push(product);
        },
        verwijderProduct(index) {
            this.productenLijst.splice(index, 1);
        },
        wijzigProductAantal(index, nieuwAantal) {
            // Zorg ervoor dat het nieuwe aantal positief is
            nieuwAantal = Math.max(1, nieuwAantal);
      
            // Update het aantal van het product in de winkelwagen
            this.productenLijst[index].productAantal = nieuwAantal;
        }
    },
    //getters
});

//Winkelwagen maken