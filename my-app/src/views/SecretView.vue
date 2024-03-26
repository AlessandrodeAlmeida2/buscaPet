<template>
    {{ publicUrl }}
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

let publicUrl = ref('')
let fileName = 'DSC00086.JPG'
const PI_Bucket = 'PI_Bucket'

const getUrlPublic = async () => {
    const { data, error } = await supabase
      .storage
      .from(PI_Bucket)
      .getPublicUrl(fileName)
    if (error) throw error
    publicUrl.value = data
}

getUrlPublic()
</script>
