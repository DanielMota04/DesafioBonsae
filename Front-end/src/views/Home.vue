<script setup>
import CsvUploader from '../components/CsvUploader.vue';
import ImportProcess from '../components/ImportProcess.vue';
</script>

<template>
    <div>
        <div class="main-container">
            <div class="main-container__title">
                <h3>Controle de importação</h3>
                <p>Gerencie seus processos de importação</p>
            </div>
            <button type="button" class="btn btn-primary">+ Novo Processo</button>
        </div>
        <div class="process-container">
            <ImportProcess />
        </div>

    </div>
</template>

<style scoped>
div {
    background: #d5d5d5;
}

.main-container {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    margin: 0;
    align-items: center;
    height: 100vh;
}

.btn-primary {
    padding: 0 1rem;
}

</style>