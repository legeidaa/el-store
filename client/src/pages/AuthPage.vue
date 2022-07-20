<template>

    <div class="login-form">
        <div class="container">
            <div class="login-form__card">
                <h2>{{this.$route.name === 'Authorization' ? 'Авторизация' : 'Регистрация' }}</h2>
                <form>
                    <input type="email" placeholder="Ваш e-mail" name="login_email" id="login_email">
                    <input type="email" placeholder="Ваш пароль" name="login_password" id="login_password">
                    <div class="login-form__buttons">
                        <div v-if="this.$route.name === 'Authorization'" class="login-form__buttons-links">
                            <!-- <div>Нет аккаунта? <router-link
                                :to="'/registration'">
                                Зарегистрируйтесь</router-link>
                            </div> -->
                            <label><input type="checkbox" name="login_remember" id="login_remember"> Запомнить меня</label>
                        </div>
                        <button class="button">{{this.$route.name === 'Authorization' ? 'Войти' : 'Зарегистрироваться' }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        /* () {
            let header
            if (this.$route.name === 'Authorization') {
                header = 'Авторизация'
            } else if (this.$route.name === 'Registration') {
                header = 'Регистрация'
            }
            return header
        } */
    }
}
</script>