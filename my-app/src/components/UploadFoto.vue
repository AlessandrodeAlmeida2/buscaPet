<template>
  <div>
    <input type="file" @change="selectFile" />
    <button @click="uploadFile">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

let file = ref(null)

const selectFile = (event) => {
  file.value = event.target.files[0]
}

const uploadFile = async () => {
  if (file.value) {
    const filePath = `${file.value.name}`
    let { error: uploadError } = await supabase.storage.from('PI_Bucket').upload(filePath, file.value)
    console.log(filePath)

    if (uploadError) {
      console.error("Error uploading file:", uploadError)
    } else {
      console.log("File uploaded successfully")
    }
  } else {
    console.log("No file selected")
  }
}
</script>
  