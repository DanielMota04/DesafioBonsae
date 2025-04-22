import axios from "axios";

const URL =
  "https://a336072c-f579-40af-b883-bf59678898b5.mock.pstmn.io";

  export async function getImportProcesses() {
    try {
      const response = await axios.get(`${URL}/importProcess`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar processos:', error);
      throw error;
    }
  }