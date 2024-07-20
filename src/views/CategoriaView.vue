<script setup>
import { ref, reactive, onMounted } from "vue";
import CategoriasApi from "@/api/categorias";
const categoriasApi = new CategoriasApi();

const defaultCategoria = { id: null, descricao: "" };
const categorias = ref([]);
const categoria = reactive({ ...defaultCategoria });

onMounted(async () => {
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
});

function limpar() {
  Object.assign(categoria, { ...defaultCategoria });
}

async function salvar() {
  if (categoria.id) {
    await categoriasApi.atualizarCategoria(categoria.value);
  } else {
    await categoriasApi.adicionarCategoria(categoria);
  }
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}

function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar);
}

async function excluir(id) {
  await categoriasApi.excluirCategoria(id);
  categorias.value = await categoriasApi.buscarTodasAsCategorias();
  limpar();
}
</script>

<template>
  <h1>Categoria</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="categoria.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="categoria in categorias" :key="categoria.id">
      <span @click="editar(categoria)">
        ({{ categoria.id }}) - {{ categoria.descricao }} -
      </span>
      <button @click="excluir(categoria.id)">X</button>
    </li>
  </ul>
</template>

<style>
.title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-top: 0;
}
.form {
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ddd;
  }
}
.list {
 justify-content: center;
 vertical-align: middle;
 text-align: center;
}
</style>
