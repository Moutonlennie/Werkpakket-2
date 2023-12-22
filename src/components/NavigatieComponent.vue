<template>
    <nav>
        <div class="nav-left">
            <img src="@/assets/logo.png" alt="logo">
            <h1>Moji Boutique</h1>
        </div>  
        <ul>
            <li v-for="navItem in navItems" :key="navItem.name" >
                <router-link v-bind:to="navItem.path">
                    <i v-if="navItem.name === 'Login'" class="fa fa-sign-in-alt fa-lg"></i>
                    <i v-else-if="navItem.name === 'Winkelwagen'" class="fa fa-shopping-cart fa-lg"></i>
                    <span v-else>{{ navItem.name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {
                    path: '/',
                    name: 'Home',
                },
                {
                    path: "/Moji's",
                    name: "Moji's",
                },
                {
                    path: '/Login',
                    name: 'Login',
                },
                {
                    path:'/Winkelwagen',
                    name: 'Winkelwagen'
                },
            ]
        }
    }
}
</script>
