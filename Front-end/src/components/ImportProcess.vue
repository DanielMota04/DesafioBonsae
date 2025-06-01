<script setup>
import { ref, onMounted } from 'vue';
import ImportProcessRow from './ImportProcessRow.vue';
import { getImportProcesses } from '../services/importProcessService.js';

const processes = ref([]);

const formatDate = (isoDate) => {
  if (!isoDate) return '-';
  const date = new Date(isoDate)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const defineStatus = (currentStep) => {
  if (['AcademicPeriod', 'Discipline', 'Class', 'User', 'Enrollment'].includes(currentStep)) {
  return 'Em andamento';
}
return 'Finalizado';
}


const loadProcesses = async () => {
  try {
    processes.value = await getImportProcesses();
  } catch (error) {
    console.error('Erro ao carregar processos: ', error);
  }
}

onMounted(() => {
  loadProcesses();
})
</script>

<template>
  <div class="process-container">
    <h3>Processos de Importação</h3>
    <p>Lista de todos os processos de importação iniciados</p>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID do Processo</th>
            <th>Período Letivo</th>
            <th>Data de Início</th>
            <th>Data de Término</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <ImportProcessRow v-for="process in processes" :key="process._id" :ProcessID="process._id"
            :academicPeriod="process.academicPeriod" :startDate="formatDate(process.startDate)"
            :endDate="formatDate(process.endDate)" :status="defineStatus(process.currentStep)" :currentStep="process.currentStep" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.process-container {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px grey;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

.table-container {
  margin-top: 1rem;
}

table {
  width: 100%;
  border: 2px solid #1161D8;
}

thead {
  background: #1161D8;
  text-align: left;
  color: white;
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}
</style>
