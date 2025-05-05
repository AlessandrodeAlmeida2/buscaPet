import { ref, watch } from 'vue'
import { supabase } from '../supabase'

export default function useItems(initialCategoria) {
  const items = ref([])
  const categoria = ref(initialCategoria)

  async function getItems() {
    let query = supabase.from('tabela1').select();

    if (categoria.value !== ' ') {
      query = query.eq('situation', categoria.value);
    }
    
    const { data } = await query;
    items.value = data;
  }

  async function getItems2() {
    let query = supabase.from('tabela2').select();

    const { data } = await query;
    items.value = data;
  }

  watch(categoria, getItems, getItems2);

  return { items, categoria, getItems, getItems2 }
}
