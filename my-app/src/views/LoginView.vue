<template>
    <div class="container-login">
        <div class="input">
            <h1>Cadastro ou Login</h1>
            <v-sheet class="mx-auto" width="300">
            <v-form>
                
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
                    label="password"
                    hide-details
                    required
                    variant="solo-filled"
                ></v-text-field><br>
                
            </v-form>
            </v-sheet>

            <div class="buttonContainer">
                <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="createAccount">Cadastrar</v-btn>
                <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="signIn">Login</v-btn>
                <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="signOut">Logout</v-btn>
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

//create account
async function createAccount() {
    const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })
    if (error) {
        console.log(error)
    } else {
        console.log(user)
    }
}

//login
async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        router.push('/home');
    }
}

//seeCurrentUser
async function seeCurrentUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        console.log(session);
        console.log(session.user.phone);
    } else {
        console.log('No active session');
    }
}


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
    color: hsla(160, 100%, 37%, 1);
    margin: 15px;
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
    animation: zoomIn 4s ease forwards;
}

@media (max-width: 768px) {
div.container-login {
    margin: 0 auto;
}
}
</style>