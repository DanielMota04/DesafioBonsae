import axios from "axios";

const URL =
  "https://aa1d3a24-6857-4369-84a6-865a5cd53b0a.mock.pstmn.io";

  export async function getImportProcesses() {
    try {
      const response = await axios.get(`${URL}/importProcess`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar processos:', error);
      throw error;
    }
  }