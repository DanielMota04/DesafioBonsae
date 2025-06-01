import axios from "axios";

const URL =
  "/api";

  export async function getCurrentStatus(id) {
    try {
      const response = await axios.get(`${URL}/general/status/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar status:', error);
      throw error;
    }
  }

  export async function updateCurrentStatus(id, data){
    try {
        const response = await axios.put(`${URL}/general/status/${id}`, data);
        return response.data;
    }catch (error){
        console.error('Erro ao atualizar status:', error);
        throw error;
    }
  }

  export async function sendAllData(id) {
    try {
      const response = await axios.post(`${URL}/general/saveAllDocuments/${id}`);
      return response.data
    }catch (error){
      console.log("erro ao enviar pro mysql:", error);
    }
  }
