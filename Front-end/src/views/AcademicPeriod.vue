<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { createImportProcess } from "../services/importProcessService.js"
import { updateCurrentStatus } from '../services/generalService.js';

defineProps({
    id: String
});

const router = useRouter();
const route = useRoute();
const academicPeriodInput = ref("");
const startDateInput = ref("");
const endDateInput = ref("");
const id = route.params.id;

const currentStep = ref(0);

const steps = [
    { numero: 1, nome: 'Período Letivo', path: `/academicPeriod/${id}` },
    { numero: 2, nome: 'Disciplinas', path: `/disciplines/${id}` },
    { numero: 3, nome: 'Turmas', path: `/classes/${id}` },
    { numero: 4, nome: 'Usuários', path: `/users/${id}` },
    { numero: 5, nome: 'Professor/Turma', path: `/LinkTeacherToClass/${id}` },
    { numero: 6, nome: 'Aluno/Turma', path: `/LinkStudentToClass/${id}` },
];

const etapasCompletas = ref([false, false, false, false, false, false]);

function formatDate(inputDate) {
    const [day, month, year] = inputDate.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

async function avancar() {

    if (academicPeriodInput.value.trim() === "" && startDateInput.value.trim() === "" && endDateInput.value.trim() === "") {
        alert("Preencha todos os campos antes de continuar.");
        return;
    }

    try {
        const newProcess = {
            "processId": `${route.params.id}`,
            "academicPeriod": `${academicPeriodInput.value.trim()}`,
            "startDate": `${formatDate(startDateInput.value.trim())}`,
            "endDate": `${formatDate(endDateInput.value.trim())}`,
            "currentStep": "AcademicPeriod",
        }

        await createImportProcess(newProcess)
            .then((res) => console.log("Criado com sucesso:", res))
            .catch((err) => console.error("Erro:", err));

        const newStep = {
            "newStep": "Discipline"
        }

        await updateCurrentStatus(route.params.id, newStep)

        etapasCompletas.value[currentStep.value] = true;

        if (currentStep.value < steps.length - 1) {
            currentStep.value++;
            router.push(steps[currentStep.value].path);
        }
    } catch (error) {
        console.error('Erro ao criar processo:', error);
        alert("Ocorreu um erro ao criar o processo. Verifique o console.");
    }
}

function selectStep(index) {

    if (index > currentStep.value && !etapasCompletas.value[currentStep.value]) {
        alert("Você precisa completar a etapa atual primeiro!");
        return;
    }

    currentStep.value = index;
    router.push(steps[index].path);
}

function voltarPagina() {
    router.push('/');
}

</script>

<template>
    <img src="../assets/Arrow2.svg" alt="Voltar" class="btn-voltar" @click="voltarPagina" />

    <div class="page-layout">
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

        <div class="content-center">
            <div class="logo-container">
                <img src="/src/assets/bonsae_logo1.svg" alt="Logo Bonsae" class="logo-bonsae" />
            </div>

            <div class="form-container">
                <div class="input-button-wrapper">
                    <label for="periodoLetivo">Período letivo</label>
                    <input v-model="academicPeriodInput" type="text" id="periodoLetivo" placeholder="Ex: 2023/1"
                        class="input-periodo" />

                    <label for="startDate">Data inicial</label>
                    <input v-model="startDateInput" type="text" id="startDate" placeholder="Ex: 01/02/2023"
                        class="input-periodo" />

                    <label for="endDate">Data final</label>
                    <input v-model="endDateInput" type="text" id="endDate" placeholder="Ex: 01/07/2023"
                        class="input-periodo" />

                    <button class="forward-btn" @click="avancar">
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.home-container {
    padding: 2rem;
}

.title-section {
    margin-bottom: 1.5rem;
}

.form-section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}

input {
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 5px;
}

.forward-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.7rem;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.rounded-circle {
    transition: background-color 0.3s ease;
}

.page-layout {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}


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
    display: flex;
    flex-direction: column;

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


/* CURVA PAR É DA ESQUERDA, AQ!!!!! */
.step-wrapper:nth-child(even)::after {
    top: 91%;
    width: 5rem;
    left: 5%;
    transform: translateX(20%) rotate(47deg);
    border-radius: 0rem 0 0 100rem;
}

/* E CURVA IMPAR É DA DIREITAAAAA!! */
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


.content-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.9;
    min-height: 80vh;
}

.logo-container {
    margin-bottom: 30px;
    margin-top: 0;
}

.logo-bonsae {
    width: 489px;
    max-width: 90%;
    height: auto;

}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
}

.input-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.input-periodo {
    padding: 14px 20px;
    border: 1px solid #007bff;
    border-radius: 5px;
    font-size: 16px;
    width: 220px;

}

.input-button-wrapper input:not(:last-of-type) {
    margin-right: 12px;
}


.forward-btn {
    background: #1161D8;
    border: none;
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
    margin-left: 8px;
    margin-bottom: 20px;
    border-radius: 60%;
    width: 70px;

}

.forward-btn:hover {
    background-color: #007bff;
}
</style>
