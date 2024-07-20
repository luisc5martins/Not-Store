<script setup>
import { ref, reactive, onMounted } from "vue";
import AcessoriosApi from "@/api/acessorios";
const acessoriosApi = new AcessoriosApi();

const defaultAcessorio = { id: null, descricao: "" };
const acessorios = ref([]);
const acessorio = reactive({ ...defaultAcessorio });

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
});

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio });
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorio(acessorio.value);
  } else {
    await acessoriosApi.adicionarAcessorio(acessorio);
  }
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar);
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorio(id);
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios();
  limpar();
}
</script>

<template>
  <h1 class="title">Acessórios</h1>

  <div class="form">
    <input type="text" v-model="acessorio.descricao" placeholder="Descrição" />
    <button @click="salvar" class="save">Salvar</button>
    <button @click="limpar" class="clean">Limpar</button>
  </div>
  <div class="list">
    <li v-for="acessorio in acessorios" :key="acessorio.id">
      <span @click="editar(acessorio)">
        ({{ acessorio.id }}) - {{ acessorio.descricao }} -
      </span>
      <button @click="excluir(acessorio.id)">X</button>
    </li>
  </div>
</template>

<style scoped>
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
