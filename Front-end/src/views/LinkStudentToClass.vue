<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import CsvUploader from "../components/CsvUploader.vue";
import ProcessHeader from "../components/ProcessHeader.vue";

const router = useRouter();

const requiredHeaders = ["Disciplina (código)","Código da turma","Matrícula (IES) ou e-mail do aluno"]

const validCsv = ref(false);
const csvData = ref([]);

const handleValidCsv = ({valid, data}) => {
    validCsv.value = valid;
    csvData.value = data
}

const nextStep = () => {
    if (!validCsv.value){
        alert("O csv não é válido");
        return
    }
    router.push("/")
}

</script>

<template>
    <div class="home-container">
        <div class="title-section">
            <ProcessHeader />

            <div class="steps">
                <!-- Aqui vao estar aquelas bolinhas de etapas -->
            </div>

            <div class="uploader-section">
                <h3>Vínculo Aluno-turma</h3>
                <CsvUploader :requiredHeaders="requiredHeaders" @validCsv="handleValidCsv"/>
            </div>

            <button class="forward-btn" @click="nextStep">Avançar <i class="bi bi-arrow-right"></i></button>

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

.uploader-section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
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
</style>