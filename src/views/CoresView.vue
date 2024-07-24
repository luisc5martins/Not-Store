<script setup>
import { ref, reactive, onMounted } from "vue";
import CoresApi from "@/api/cores";
const coresApi = new CoresApi();

const defaultCor = { id: null, descricao: "" };
const cores = ref([]);
const cor = reactive({ ...defaultCor });

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores();
});

function limpar() {
  Object.assign(cor, { ...defaultCor });
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarCor(cor.value);
  } else {
    await coresApi.adicionarCor(cor);
  }
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar);
}

async function excluir(id) {
  await coresApi.excluirCor(id);
  cores.value = await coresApi.buscarTodasAsCores();
  limpar();
}
</script>

<template>
  <h1 class="title">Cores</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="cor.nome" placeholder="Cor" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <div class="list">
    <li v-for="cor in cores" :key="cor.id">
      <span @click="editar(cor)">
        ({{ cor.id }}) - {{ cor.nome }} -
      </span>
      <button @click="excluir(cor.id)">X</button>
    </li>
  </div>
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
