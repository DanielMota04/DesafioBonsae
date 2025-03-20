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
    <div>
        <input type="file" accept=".csv" @change="handleFileUpload" />
        <CsvTable :csvData="csvData" />
    </div>
</template>

<style scoped>
input[type="file"] {
    margin-bottom: 20px;
}
</style>