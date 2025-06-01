import axios from "axios";

const URL =
  "/api";

  export async function getImportProcesses() {
    try {
      const response = await axios.get(`${URL}/academic-period`);

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar processos:', error);
      throw error;
    }
  }

  export async function createImportProcess(data) {
    try {
      const response = await axios.post(`${URL}/academic-period`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar processo:", error);
      throw error;
    }
  }

  export async function deleteImportProcess(id) {
    try{
      const response = await axios.delete(`${URL}/academic-period/rollback/${id})`)
      return response.data;
    }catch (error){
      console.error("erro ao deletar processo:", error);
    }
  }