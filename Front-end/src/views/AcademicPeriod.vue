<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const backToList = () => {
    router.push("/")
}

const nextStep = () => {
    // adicionar validação do período letivo
    router.push("/disciplines")
}

const academicPeriodInput = ref("");

</script>

<template>
    <div class="home-container">
        <div class="title-section">
            <div>
                <p @click="backToList"><i class="bi bi-arrow-left"></i> Voltar para a lista</p>
                <h1>Importação de dados: Processo X</h1>
            </div>

            <div class="steps">
                <!-- Aqui vao estar aquelas bolinhas de etapas-->
            </div>

            <div class="form-section">
                <label for="period">Período Letivo</label>
                <input v-model="academicPeriodInput" type="text" id="period" placeholder="Ex: 2023/2" />
                <button class="forward-btn" @click="nextStep">Avançar <i class="bi bi-arrow-right"></i></button>
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

h1 {
    font-size: 1.7rem;
    font-weight: bold;
}

p {
    color: black;
    font-weight: bold;
    cursor: pointer;
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
</style>
