<script setup>
import { ref } from 'vue';
import papaparse from 'papaparse';

const props = defineProps({
    requiredHeaders: {
        type: Array,
        required: true
    }
});

const emits = defineEmits(['validCsv']);

const csvData = ref([]);
const jsonData = ref(null);

const validateRows = (data, requiredHeaders) => {
    const invalidRows = data.filter(row => requiredHeaders.some(header => !row[header] || row[header].trim() === ""));
    return invalidRows.length > 0 ? { valid: false, invalidRows } : { valid: true };
}


const handleFileUpload = (ev) => {
    const file = ev.target.files[0];
    if (file) {
        if (file.type === 'text/csv') {
            papaparse.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const headers = results.meta.fields;
                    const isHeaderValid = props.requiredHeaders.every(header => headers.includes(header));

                    if (isHeaderValid) {
                        console.log("O header tá válido");

                        const validation = validateRows(results.data, props.requiredHeaders);
                        if (validation.valid) {
                            csvData.value = results.data;
                            jsonData.value = JSON.stringify(results.data);
                            emits('validCsv', { valid: true, data: results.data, isLoaded: true });
                        } else {
                            console.log("Existem linhas inválidas");
                            emits('validCsv', { valid: false, data: [] });
                        }

                    } else {
                        console.log("Faltam headers");
                        emits('validCsv', { valid: false, data: [] });
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
    <label class="custom-upload">
        Escolha um arquivo CSV
        <input type="file" accept=".csv" @change="handleFileUpload" />
    </label>
</template>

<style scoped>
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

</style>
