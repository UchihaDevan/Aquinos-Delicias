import { supabase } from '../lib/supabaseClient';

export async function getProdutos() {
  const { data, error } = await supabase.from('aquinos').select('*').order('name');
  if (error) throw new Error(error.message);
  return data;
}

export async function adicionarProduto(produto: {
  name: string;
  description?: string;
  image?: string;
  price?: number;
}) {
  const { data, error } = await supabase.from('aquinos').insert([produto]);
  if (error) throw new Error(error.message);
  return data;
}