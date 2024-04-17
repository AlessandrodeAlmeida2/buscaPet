<template>
    <div class="container-login">
        <h1> Form </h1>
        <div class="inputContainer">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">
        </div>

        <div class="inputContainer">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password">
        </div>

        <div class="buttonContainer">
            <button @click="createAccount">Create</button>
            <button @click="signIn">Login</button>
            <button @click="seeCurrentUser">See user</button>
            <button @click="signOut">Logout</button>
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
div.container-login {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>