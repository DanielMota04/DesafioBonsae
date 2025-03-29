<script setup>
import { useRouter } from 'vue-router';
import CsvUploader from "../components/CsvUploader.vue";
import ProcessHeader from "../components/ProcessHeader.vue";

const router = useRouter();

const nextStep = () => {
    // adicionar validações
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
                <h3>Usuários</h3>
                <CsvUploader />
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