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
      console.log('Dados enviados:', data); // ← Adicione isso
      const response = await axios.post(`${URL}/academic-period`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar processo:", error);
      throw error;
    }
  }