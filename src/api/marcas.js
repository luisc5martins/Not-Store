import axios from "axios";
export default class MarcasApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get("/marcas/");
    return data.results;
  }
  async adicionarMarca(marcas) {
    const { data } = await axios.post("/marcas/", marcas);
    return data.results;
  }
  async atualizarMarca(marcas) {
    const { data } = await axios.put(`/marcas/${marcas.id}/`, marcas);
    return data.results;
  }
  async excluirMarca(id) {
    const { data } = await axios.delete(`/marcas/${id}/`);
    return data.results;
  }
}
