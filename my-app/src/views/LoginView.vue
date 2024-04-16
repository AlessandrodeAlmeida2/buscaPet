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

        <div class="inputContainer">
            <label for="name">Username</label>
            <input type="name" id="name" v-model="name">
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
let name = ref('');

//create account
async function createAccount() {
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {
                first_name: name.value
            }
        }
    })
    if (error) {
        console.log(error)
    } else {
        console.log(data)
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
    const localUser = await supabase.auth.getSession();
    console.log(localUser);
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