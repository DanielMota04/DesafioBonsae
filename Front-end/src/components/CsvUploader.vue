<script setup>
import { ref } from 'vue';
import papaparse from 'papaparse';
import CsvTable from './CsvTable.vue';

const csvData = ref([]);
const jsonData = ref(null);

const handleFileUpload = (ev) => {
    const file = ev.target.files[0];
    if (file) {
        if (file.type === 'text/csv') {
            papaparse.parse(file, {
                header: true,
                complete: (results) => {
                    csvData.value = results.data;
                    jsonData.value = JSON.stringify(results.data);
                },
                error: (error) => {
                    console.error('Erro ao fazer o parse do CSV:', error);
                },
            });
        } else {
            console.error('O arquivo selecionado não é um CSV.');
        }
    }
};
</script>

<template>

    <img src="/group-6.png" alt="Decor Left" class="decor-left" />
    <img src="/logo.png" alt="Logo Bonsae" class="logo" />

    <label class="file-button">
        Escolha um arquivo CSV
        <input type="file" accept=".csv" @change="handleFileUpload" hidden />

    </label>


</template>

<style scoped>
.file-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    bottom: 25rem;
    left: 30rem;
    margin: 0;
    width: 190px;
    display: inline-block;
    text-align: center;
    border: 2px solid #139AFE;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    color: #011738;
    background-color: none;
}


.decor-left {
    height: 44rem;
    margin: 0;
    width: 15rem;
}

.logo {
    width: 350px;
    height: 125px;
    position: absolute;
    left: 39rem;
    top: 5rem;
}
</style>
