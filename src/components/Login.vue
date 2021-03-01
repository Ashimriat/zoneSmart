<template lang="pug">
    .Login
        .Login__background
        .Login__formContainer
            .Login__title
                |  Вход
            input.Login__input(
                v-model="email"
                placeholder="E-mail или телефон"
            )
            input.Login__input(
                v-model="password"
                placeholder="Пароль"
                :type="is_showing_password ? 'text' : 'password'"
            )
                img.Login__passwordInputEye(
                    :class="`Login__passwordInputEye--${is_showing_password ? 'opened' : 'closed'}`"
                    @click="togglePasswordDisplay"
                )
            button.Login__button(@click="logIn(email, password)")
</template>

<script>
    import { mapActions } from "vuex"
    import { actions } from "../bootstrap/store/storeConstants"

    const { logIn } = actions.auth;

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                is_showing_password: false
            }
        },
        methods: {
        	  ...mapActions({ logIn }),
            togglePasswordDisplay() {
        	  	  this.is_showing_password = !this.is_showing_password
            }
        }
    }
</script>

<style lang="sass">
    .Login
        &__background
        &__formContainer
        &__title
        &__input
        &__passwordInputEye
            &--opened
            &--closed
        &__button
</style>
