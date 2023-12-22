<script>
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
  components: {
    ProductCardComponent
  },
  methods: {
    Filter() {

        let cards = document.getElementsByClassName("card")
        let inputGender = document.getElementById("gender").value.toLowerCase();
        let inputStijl = document.getElementById("stijl").value.toLowerCase();

    

        for(var i = 0; i < cards.length; i++){
            let cardClass = cards[i].classList


            if (inputGender == "gender" && inputStijl == "stijl") {
                cards[i].style.display = "block";
            }else if((cardClass[1] === inputGender || inputGender == "gender") && (cardClass[2] === inputStijl || inputStijl == "stijl")){
                cards[i].style.display = "block";
            }else{
                cards[i].style.display = "none";
            }
        }



        /** 
        for(var i = 0; i < teest.length; i++){
            let item = teest[i]
            if (inputGender == "gender" && ) {
                item.style.display = "block";
            }else{
                if (item.className.substring(5, teest.length) != inputGender) {
                    item.style.display = "none"
                }else{
                    item.style.display = "block"
                }
            }
            

        }*/
    },
  },
  data() {
    return {
        filteren: true
    }
  },
};
  
</script>

<template>
<header class="header-overzicht">
        <h1>Moji shop!</h1>
        <p>
            Welkom in onze Bitmoji-winkel, waar creativiteit en zelfexpressie samenkomen in een wereld van digitale mode. 
            Bij ons draait alles om het transformeren van je digitale alter ego in een stijlicoon, een grappige trendsetter, of een perfect geklede virtuele vriend.
        </p>
        <p>Onze collectie Bitmoji-kleding en accessoires is zorgvuldig samengesteld om jouw Bitmoji's een nieuwe look en persoonlijkheid te geven. 
            Van casual tot formele kledingstukken, coole accessoires, en hilarische outfits - je zult zeker iets vinden dat bij je past en bij de gelegenheid.
        </p>
        <p>
            Dus duik in onze virtuele kleerkast, laat je creativiteit de vrije loop en geef je Bitmoji een upgrade met stijl. 
            Begin met shoppen en ontdek de eindeloze mogelijkheden om je digitale metgezel tot leven te brengen.
        </p>
    </header>
        <div class="filter">
                <button type="button" class="filterbtn" @click="Filter()">Filteren</button>
        </div>
        <div class="filteropties" v-show="filteren">
            <select name="Gender" class="opties" id="gender">
                <option value="Gender" >Gender</option>
                <option value="Man">Man</option>
                <option value="Vrouw">Vrouw</option>
            </select>
            <select name="stijl" class="opties" id="stijl">
                <option value="Stijl" >Stijl</option>
                <option value="Sportief">Sportief</option>
                <option value="Chic">Chic</option>
                <option value="Alledaags">Alledaags</option>
            </select>
        </div>

        <div class="main-container">
                <ProductCardComponent :product="product" />
        </div>
</template>