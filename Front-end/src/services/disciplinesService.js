import axios from "axios";

const URL = "/api";

export async function createDiscipline(data) {
  try {
    const plainData = JSON.parse(JSON.stringify(data));
    const response = await axios.post(`${URL}/disciplines`, plainData);
    console.log("Enviando dados:", JSON.stringify(data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar disciplinas:", error);
    throw error;
  }
}
