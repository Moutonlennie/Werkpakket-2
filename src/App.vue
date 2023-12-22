<script>
    import NavigatieComponent from '@/components/NavigatieComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'

    export default {
        components: {
            NavigatieComponent,
            FooterComponent,
        },
    }
</script>

<template>
    <NavigatieComponent/>

    <router-view></router-view>

    <FooterComponent/>
</template>

<style>
</style>
