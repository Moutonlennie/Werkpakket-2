<script>
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {
    PopularProductsComponent,
  },
  methods: {
    mojiPag(){
        this.$router.push("/Moji's");
        console.log("Hallo, dit is een test")
    }
}
};
</script>

<template>
        <header>
        <div class="container">
            <div class="logo">
                <h1>Moji Boutique</h1>
                <h3>Breng je wereld tot leven met Moji's!</h3>
            </div>
            <div class="inleiding">
                <h4>Ontdek de ultieme bitmoji-mode!</h4>
                <p>Stap in de wereld van zelfexpressie en creativiteit met onze exclusieve collectie kleding voor Bitmoji's.<br> 
                    We hebben speciaal voor jou en je digitale alter ego een unieke garderobe samengesteld die grenzen verlegt <br> 
                    en je Bitmoji tot leven brengt met stijl en persoonlijkheid.
                </p>
            </div>
            <button type="button" @:click="mojiPag()">Shop je nieuwe outfit!</button>
        </div>
    </header>
     <main>
        <div class="main-container">
                <PopularProductsComponent/>
        </div>

        <div class="main-content">
            <div class="why-card">
                <div class="card-number">01</div>
                <h3>Unieke stijl</h3>
                <p>Elk kledingstuk is ontworpen met aandacht voor detail en oog voor de laatste modetrends. 
                    Of je nu op zoek bent naar casual, chic, grappig, of extravagante stijlen, we hebben het allemaal.
                   </p>
            </div>

            <div class="why-card">
                <div class="card-number">02</div>
                <h3>Hoogwaardige kwaliteit</h3>
                <p>Al onze kleding is gemaakt van hoogwaardige materialen en met vakmanschap om ervoor te zorgen dat je Bitmoji er altijd fantastisch uitziet.</p>
            </div>

            <div class="why-card">
                <div class="card-number">03</div>
                <h3>Maatwerk</h3>
                <p>Personaliseer je Bitmoji met kleding die bij je stemming past. Van hoodies 
                    tot jurken, brillen, hoeden, en accessoires, wij bieden een breed scala aan opties.
                </p>
            </div>
        </div>

        <section>
        <div class="why">
            <h2>Waarom voor onze Bitmoji-kleding kiezen?</h2>
            <p>Of je nu je Bitmoji wilt aankleden voor een speciale gelegenheid, een grappige look wilt creëren, of gewoon je stijl wilt laten zien, 
                onze kleding is de perfecte keuze. Met onze collectie kun je je digitale avatar omtoveren tot een ware fashionista en je creativiteit 
                de vrije loop laten.
                <br>Laat je Bitmoji stralen met de nieuwste mode en geef hem/haar een unieke stijl die past bij jouw persoonlijkheid. Begin vandaag nog 
                met shoppen en upgrade je Bitmoji's garderobe!</p>
        </div>
        </section>
    </main>
</template>

<style>
header{
    background-image: url("../assets/achtergrond1.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}

</style>