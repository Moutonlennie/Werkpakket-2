import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "@/view/homeView.vue";
import MojiView from "@/view/MojiView.vue";
import LoginView from "@/view/LoginView.vue";
import MojiSpecifiekView from "@/view/MojiSpecifiekView.vue";
import CartView from "@/view/CartView.vue";
import bevestigingView from "@/view/bevestigingView.vue";
import CheckoutView from "@/view/CheckoutView.vue";
import PageNotFoundView from "@/view/PageNotFoundView.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/", 
            component: homeView,
            name: "home"
        },
        {
            path: "/Moji's", 
            component: MojiView
        },
        {
            path: "/login", 
            component: LoginView
        },
        {
            path:"/Moji/:id",
            component: MojiSpecifiekView,
            name: "mojiSpecifiek"
        },
        {
            path: "/winkelwagen", 
            component: CartView
        },
        {
            path: "/winkelwagen-bevestiging",
            component: bevestigingView,
            name: "bevestiging"
        },
        {
            path: "/checkout",
            component: CheckoutView
        },
        {
            // Altijd als laatste zetten
            path: '/:notFound(.*)',
            component: PageNotFoundView
        },
    ]
})

export default router;