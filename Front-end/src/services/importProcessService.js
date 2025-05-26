import axios from "axios";

const URL =
  "https://aa1d3a24-6857-4369-84a6-865a5cd53b0a.mock.pstmn.io";
  // "http://localhost:3001";

  export async function getImportProcesses() {
    try {
      const response = await axios.get(`${URL}/importProcess`);
      // const response = await axios.get(`${URL}/academic-period`);

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