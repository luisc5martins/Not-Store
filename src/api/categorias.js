import axios from "axios";
export default class CategoriasApi {
  async getCategories() {
    const { data } = await axios.get("/categorias/");
    return data.results;
  }
  async createCategory(category) {
    const { data } = await axios.post("/categorias/", category);
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
