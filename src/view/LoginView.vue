<script>
export default {
    data() {
        return {
            credentials: {
                email: "moji@info.com",
                password: "mojiShop"
            }
        };
    },
    methods: {
        loginUser() {
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            if (email === this.credentials.email && password === this.credentials.password) {
                // Hier kun je doorverwijzen naar de MojiView.vue of iets anders doen na het inloggen
                this.$router.push("/winkelwagen");
            } else {
                alert("Ongeldige inloggegevens. Probeer opnieuw.");
                this.$router.push("/login");
            }
        }
    }
}
</script>

<template>
<div class="login-img">
        <form @submit.prevent="loginUser">
            <h1>Login</h1>
            <div class="e-mail">
                <label for="email">Email</label><br>
                <input type="email" placeholder="mojiboutique@info.be" name="uname" ref="email" required>
            </div>

            <div class="wachtwoord"></div>
            <label for="psw">Wachtwoord</label><br>
            <input type="password" placeholder="Wachtwoord" name="psw" ref="password" required><br>

            <label class="login-vergeten">Wachtwoord vergeten?</label><br>

            <button class="login-button" type="submit">Login</button>
        </form>
</div>
</template>
