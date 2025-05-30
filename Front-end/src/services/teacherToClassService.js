import axios from "axios";

const URL = "/api";

export async function createLinkTeacherToClass(data) {
  try {
    const response = await axios.post(`${URL}enrollment/bulk`, data, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Erro do servidor:", error.response.data);
      console.error("Status:", error.response.status);
    } else if (error.request) {
      console.error("Sem resposta do servidor:", error.request);
    } else {
      console.error("Erro na configuração da requisição:", error.message);
    }
    throw error;
  }
}
