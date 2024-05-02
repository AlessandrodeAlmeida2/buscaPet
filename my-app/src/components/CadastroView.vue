<template>
    <div class="container-login">
        <div class="input">
            <h1>Faça seu cadastro</h1>
            <v-sheet class="mx-auto" width="300">
            <v-form class="campos">
                
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
                    label="Senha"
                    hide-details
                    required
                    variant="solo-filled"
                    type="password"
                ></v-text-field><br>
                
            </v-form>
            </v-sheet>

            <div class="buttonContainer">
                <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="createAccount">Cadastrar</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../supabase'

//connect inputs
let email = ref('');
let password = ref ('');

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
        window.alert("Um email foi enviado para " + email.value + ". Por favor, verifique sua caixa de entrada.")
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

.container-login .campos {
    background-color: var(--background-color);
}

@media (max-width: 768px) {
div.container-login {
    margin: 0 auto;
}
}
</style>