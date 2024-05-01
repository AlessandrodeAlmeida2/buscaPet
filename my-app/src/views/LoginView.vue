<template>
    <div class="container-login">
        <div class="input">
            <h1>Entrar</h1>
            <v-sheet class="mx-auto" width="300">
            <v-form class="form" v-model="valid">

                <v-text-field
                    v-model="email"
                    label="E-mail"
                    hide-details
                    required
                    variant="solo-filled"
                ></v-text-field><br>

                <v-text-field
                    v-model="password"
                    :counter="10"
                    type="password"
                    label="Senha"
                    hide-details
                    required
                    variant="solo-filled"
                ></v-text-field>

            </v-form>
            </v-sheet>
            <div class="buttonContainer">
                <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="signIn">Entrar</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase'
import { useRouter } from 'vue-router';

//connect inputs
let email = ref('');
let password = ref ('');
const router = useRouter()

//login
async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        console.log(error);
        window.alert("E-mail ou senha incorretos")
    } else {
        console.log(data);
        router.push('/home');
    }
}

//seeCurrentUser
/*async function seeCurrentUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        console.log(session);
        console.log(session.user.phone);
    } else {
        console.log('No active session');
    }
}*/


//logout
async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
    } else {
        console.log("Logout has been successful")
    }
}

</script>

<style>
.container-login h1 {
    color: var(--primary-color);
    margin: 16px;
}

.container-login .form {
    background-color: var(--background-color);
}

div.input {
    display: flex;
    flex-direction: column;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
    text-decoration: none;
}

@media (max-width: 768px) {
    div.container-login {
        margin: 0 auto;
    }
}
</style>