<script>
import { ref, onMounted, watch } from 'vue';
import { supabase } from '../supabase'
import { useRouter } from 'vue-router';

export default {
  setup() {
    const item = ref(null);
    const itemId = ref('');
    const userId = ref('');
    const getId = ref('');
    const results = ref('');
    const categoria = ref('');
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
    let query = supabase.from('tabela1').select().eq('user_id', userId.value);
  
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
      router.push({ name: 'update', params: { itemId: itemId.value } })
    }

    function getItem(id) {
      getId.value = id // Defina getId.value em vez de itemId.value
      router.push({ name: 'upload', params: { getId: getId.value } })
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
      updateItem,
      getItem
    }
  }
}
</script>

<template>
  <div class="container-account">
    <div v-if="item">
      <h2>Dados do usuário</h2>
        <v-sheet class="mx-auto" width="300">
            <v-form class="form">

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
    </div>

        <div class="post" v-if="results">
          <h2>Dados da postagem</h2>
          <ul>
              <li v-for="result in results" :key="result.user_id">
                <a @click="getItem(result.id)">
                  <img :src="result.photo_url" alt="Image" />
                  <h4>ATUALIZAR FOTO</h4>
                </a> 
                  <div class="bottons">
                    <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="() => deleteItem(result.id)">Deletar</v-btn>
                    <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="() => updatePost(result.id)">Atualizar</v-btn>
                  </div>
              </li>
          </ul>
      </div>
    </div>
</template>

<style>
.container-account h2 {
  color: hsla(160, 100%, 37%, 1);
  text-align: center;
  margin: 30px 0 15px 0;
  animation: zoomIn 3s ease forwards;
  animation-delay: 1s;
  visibility: hidden;
}

.container-account .form {
  animation: rotate 2s ease forwards;
  background-color: var(--background-color);
}

.container-account ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.container-account li {
  display: flex;
  flex-direction: column;
  width: 250px;
  animation: zoomIn 3s ease forwards;
  
}

.container-account li img {
  border-radius: 15px;
  width: 235px;
}

.container-account li a {
  background: hsla(160, 100%, 37%, 1);
  border: 5px solid hsla(160, 100%, 37%, 1);
  border-radius: 20px;
  color: #fff;
}

.container-account li h4 {
  text-align: center;
  margin: 5px;
}

.container-account li .bottons {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.container-account .btn-update {
  animation: zoomIn 4s ease forwards;
}

@media (max-width: 768px) {
.container-account {
  margin: 5% auto;
}

  .container-account ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-account li {
    width: 80%;
  }

  .container-account li img {
    width: 100%;
  }

  .container-account li .bottons {
  display: flex;
  flex-direction: column;
  }

  .container-account .v-btn {
    margin: 5px 15%;
  }
  
}

</style>