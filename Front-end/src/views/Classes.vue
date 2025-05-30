<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import CsvTable from '../components/CsvTable.vue';
import CsvUploader from '../components/CsvUploader.vue'
import { createClasses } from '../services/classesService.js';

defineProps({
  id: String
});

const router = useRouter();
const route = useRoute();

const csvData = ref([]);
const csvLoaded = ref(false);
const validCsv = ref(false);
const dataToSend = ref([]);

const id = route.params.id;

const requiredHeaders = [
  "Disciplina (Código)",
  "Turma",
  "Código da turma"
];

const handleValidCsv = ({ valid, data, isLoaded }) => {
  validCsv.value = valid;
  csvData.value = data;
  csvLoaded.value = isLoaded;
}

const currentStep = ref(2);
const steps = [
  { numero: 1, nome: 'Período Letivo', path: `/academicPeriod/${id}` },
  { numero: 2, nome: 'Disciplinas', path: `/disciplines/${id}` },
  { numero: 3, nome: 'Turmas', path: `/classes/${id}` },
  { numero: 4, nome: 'Usuários', path: `/users/${id}` },
  { numero: 5, nome: 'Professor/Turma', path: `/LinkTeacherToClass/${id}` },
  { numero: 6, nome: 'Aluno/Turma', path: `/LinkStudentToClass/${id}` },
];
const etapasCompletas = ref([true, false, false, false, false, false]);

function selectStep(index) {
  if (index > currentStep.value && !etapasCompletas.value[currentStep.value]) {
    alert("Você precisa completar a etapa atual primeiro!");
    return;
  }
  currentStep.value = index;
  router.push(steps[index].path);
}

const saveData = () => {
  dataToSend.value = csvData.value.map(item => ({
    "Número do Processo": id,
    "Disciplina (Código)": item["Disciplina (Código)"],
    "Turno": item["Turno"],
    "Turma": item["Turma"],
    "Código da turma": item["Código da turma"]

  }))
};

async function sendData() {
  if (!validCsv.value || !csvData.value.length) {
    alert("Nenhum dado válido para enviar.");
    return;
  }

  try {
    saveData();
    const formatedData = JSON.parse(JSON.stringify(dataToSend.value));
    console.log(formatedData);
    
    await createClasses(formatedData);

    console.log('Todos os dados enviados com sucesso.');
    currentStep.value++;
    router.push(steps[currentStep.value].path);

  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    alert("Ocorreu um erro ao enviar os dados. Verifique o console.");
  }
}


function backToHome() {
  router.push('/');
}

</script>

<template>
  <img src="../assets/Arrow2.svg" alt="Voltar" class="btn-voltar" @click="backToHome" />

  <div class="page-layout">
    <!-- Stepper lateral -->
    <div class="stepper-container">
      <div v-for="(step, index) in steps" :key="index" class="step-wrapper">
        <button class="step-circle"
          :class="{ active: currentStep === index, esquerda: index % 2 === 0, direita: index % 2 !== 0 }"
          @click="selectStep(index)">
          <div class="step-number" :class="{ 'text-active': currentStep === index }">{{ step.numero }}</div>
          <div class="step-name" :class="{ 'text-active': currentStep === index }">{{ step.nome }}</div>
        </button>
      </div>
    </div>

    <!-- Conteúdo central -->
    <div class="content-center">
      <div class="logo-wrapper" :class="{ 'logo-small': csvLoaded }">
        <img src="/src/assets/bonsae_logo1.svg" alt="Logo Bonsae" />
      </div>


      <div v-if="!csvLoaded" class="upload-area">
        <CsvUploader  :requiredHeaders="requiredHeaders" @validCsv="handleValidCsv" @csvLoaded="csvLoaded = true"/>
      </div>

      <div v-else class="table-wrapper">
        <CsvTable @save="saveData" :data="csvData" />

        <div class="final-button-wrapper">
          <button class="btn-finalizar" @click="sendData">
            Finalizar Importação
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.content-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.9;
  min-height: 80vh;
}

.logo-container {
  margin-bottom: 30px;
  transition: all 0.5s ease;
}

.logo-top {
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 10px;
  transform: translateY(-20px);
}

.logo-bonsae {
  width: 489px;
  max-width: 90%;
  height: auto;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  margin-bottom: 30px;
}

.logo-wrapper img {
  width: 300px;
  transition: all 0.5s ease;
}

.logo-small {
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.logo-small img {
  width: 180px;
}


.upload-area {
  margin-top: 40px;
}

.custom-upload {
  background-color: white;
  border: 2px solid #007bff;
  color: #011738;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-upload:hover {
  background-color: #007bff;
  color: white;
}

.custom-upload input[type="file"] {
  display: none;
}

.table-wrapper {
  width: 90%;
  margin-top: 20px;
}

/* Stepper */
.stepper-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 60px;
  margin: 12px 0 0 0;
}

.step-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-wrapper:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 130%;
  height: 41px;
  border: 15px solid #1161D8;
  border-top: none;
  border-right: none;
  transform: translateX(-50%) rotate(45deg) scaleY(0);
}

.step-wrapper:nth-child(even)::after {
  top: 91%;
  width: 5rem;
  left: 5%;
  transform: translateX(20%) rotate(47deg);
  border-radius: 0rem 0 0 100rem;
}

.step-wrapper:nth-child(odd)::after {
  top: 88%;
  width: 5rem;
  left: 24%;
  transform: translateX(60%) rotate(220deg);
  border-radius: 5px 0 0 160px;
}

.step-circle {
  margin-bottom: 10px;
  width: 120px;
  height: 122px;
  border-radius: 50%;
  background-color: #1161D8;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.step-circle.active {
  background-color: #8FBAFA;
}

.step-circle.esquerda {
  margin-right: 40px;
}

.step-circle.direita {
  margin-left: 40px;
}

.step-number {
  font-size: 1.5rem;
  font-weight: bold;
}

.step-name {
  font-size: 0.8rem;
  margin-top: 5px;
  text-align: center;
  font-weight: 500;
  white-space: pre-line;
}

.text-active {
  color: #0C479D;
}

.btn-voltar {
  width: 50px;
  height: 40px;
  cursor: pointer;
  margin: 1.3rem;
  margin-left: 6rem;
  transition: transform 0.2s ease-in-out;
}

.btn-voltar:hover {
  transform: scale(1.1);
}

.import-title {
  font-family: 'Nunito', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.final-button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn-finalizar {
  background-color: #1161D8;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-finalizar:hover {
  background-color: #0d4ab8;
}
</style>
