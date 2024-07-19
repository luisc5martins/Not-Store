import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get("/categorias/");
    return data.results;
  }
  async adicionarCategoria(categorias) {
    const { data } = await axios.post("/categorias/", categorias);
    return data.results;
  }
  async atualizarCategoria(categorias) {
    const { data } = await axios.put(`/categorias/${categorias.id}/`, categorias);
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`/categorias/${id}/`);
    return data.results;
  }
}
