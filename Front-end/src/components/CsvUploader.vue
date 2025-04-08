<script setup>
import { ref } from 'vue';
import papaparse from 'papaparse';
import CsvTable from './CsvTable.vue';

const props = defineProps({
  requiredHeaders: {
    type: Array,
    required: true
  }
});

const emits = defineEmits(['validCsv']);

const csvData = ref([]);
const jsonData = ref(null);


const handleFileUpload = (ev) => {
    const file = ev.target.files[0];
    if (file) {
        if (file.type === 'text/csv') {
            papaparse.parse(file, {
                header: true,
                complete: (results) => {
                    const headers = results.meta.fields;
                    const isHeaderValid = props.requiredHeaders.every(header => headers.includes(header));

                    if(isHeaderValid){
                        console.log("O header ta válido");
                        csvData.value = results.data;
                        jsonData.value = JSON.stringify(results.data);
                        emits('validCsv', {valid: true, data: results.data})
                    }else{
                        console.log("Faltam headers");
                        emits('validCsv', {valid: false, data: []})
                    }


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

    <label class="data-table">
        <CsvTable :csvData="csvData"/>
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

.data-table {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    display: inline-block;
    text-align: center;
    border: 2px solid #000;
    border-radius: 25px;
    padding: 10px 20px;
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
