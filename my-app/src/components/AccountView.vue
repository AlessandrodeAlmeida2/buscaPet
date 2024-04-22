<script>
import { ref, onMounted, watch } from 'vue';
import { supabase } from '../supabase'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const item = ref(null);
    const itemId = ref('');
    const userId = ref('');
    const results = ref('');
    const categoria = ref('');
    const cel = ref('');
    const router = useRouter();

    //connect inputs

    //seeCurrentUser
    async function seeCurrentUser() {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            userId.value = session.user.id;
            console.log(userId.value);
        } else {
            console.log('No active session');
        }
    }

    async function getItems() {
    let query = supabase.from('tabela1').select();
  
      if (categoria.value) {
        query = query.eq('situation', categoria.value);
      }
      
      const { data } = await query;
      results.value = data;
    }

    watch(categoria, getItems);

    const updateItem = async () => {
    const { data, error } = await supabase
      .from('usuario')
      .upsert({ nameUser: item.value.nameUser, cel: item.value.cel })
      .eq('id', userId.value)

    if (error) {
      console.log(error)
    } else {
      router.push('/read');
    }
  }

    async function deleteItem(id) {
      const result = results.value.find(result => result.id === id);
      if (result) {
        // Extrai o nome do arquivo da URL
        const path = result.photo_url.split('/').pop();
        console.log(path)

        // Remove a imagem do bucket do Supabase
        await supabase.storage.from('PI_Bucket').remove([path]);

        // Deleta o item da tabela
        await supabase.from('tabela1').delete().eq('id', id);
        getItems(); // Atualiza a lista após deletar o item
      }
    }

    function updatePost(id) {
      itemId.value = id
      router.push({ name: 'update', params: { itemId: itemId.value } }) // Passa itemId como um parâmetro de rota
    }


    onMounted(async () => {
        await seeCurrentUser();
        await getItems();
        const { data } = await supabase.from('usuario').select().eq('id', userId.value)
        item.value = data[0]
        console.log(item.value)
    })

    return {
      item,
      results,
      seeCurrentUser,
      updatePost,
      deleteItem,
      updateItem
    }
  }
}
</script>

<template>
    <div v-if="item">

        <v-sheet class="mx-auto" width="300">
            <v-form>

                <v-text-field
                for="nameUser"
                id="nameUser"
                label="Nome"
                v-model="item.nameUser"
                variant="solo-filled"
                ></v-text-field>

                <v-text-field
                    label="Celular"
                    v-model="item.cel"
                    hide-details
                    variant="solo-filled"
                ></v-text-field><br>
                
            </v-form>
        </v-sheet>
        <div class="btn-update">
            <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="updateItem">Atualizar</v-btn>
        </div>

        <ul>
            <li v-for="result in results" :key="result.id">
                <a @click="getItem(item.id)">
                    <img :src="result.photo_url" alt="Image" />
                    Situação: {{ result.situation }}<br>
                </a>
                <div class="bottons">
                    <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="() => deleteItem(result.id)">Deletar</v-btn>
                    <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="() => updatePost(result.id)">Atualizar</v-btn>
                </div>
            </li>
        </ul>
  
    </div>
</template>