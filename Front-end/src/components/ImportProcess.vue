<script setup>
import ImportProcessRow from './ImportProcessRow.vue';

const processes = [
  {
    ProcessID: "proc-01",
    academicPeriod: "2024.1",
    startDate: "01/02/2024 11:30",
    endDate: "01/06/2024 10:45",
    status: "Finalizado"
  },
  {

    ProcessID: "proc-02",
    academicPeriod: "2024.2",
    startDate: "01/07/2024 07:30",
    endDate: "30/11/2024 16:10",
    status: "Finalizado"
  },
  {
    ProcessID: "proc-03",
    academicPeriod: "2025.1",
    startDate: "01/02/2025 12:40",
    endDate: "",
    status: "Em andamento"
  }
]
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
          <ImportProcessRow v-for="process in processes" :key="process.ProcessID" :ProcessID="process.ProcessID"
            :academicPeriod="process.academicPeriod" :startDate="process.startDate" :endDate="process.endDate"
            :status="process.status" />
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
  box-shadow: 0 2px 4px #ddd;
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
  border-collapse: collapse;
  border: 1px solid #ddd;
}

thead {
  background: whitesmoke;
  text-align: left;
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}
</style>
