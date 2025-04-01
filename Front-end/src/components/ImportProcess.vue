<script setup>
import ImportProcessRow from './ImportProcessRow.vue';

const proc01 = {
  ProcessID: "proc-01",
  academicPeriod: "2024.1",
  startDate: "01/02/2024 11:30",
  endDate: "01/06/2024 10:45",
  status: "Finalizado"
};

const proc02 = {
  ProcessID: "proc-02",
  academicPeriod: "2024.2",
  startDate: "01/07/2024 07:30",
  endDate: "30/11/2024 16:10",
  status: "Finalizado"
};

const proc03 = {
  ProcessID: "proc-03",
  academicPeriod: "2025.1",
  startDate: "01/02/2025 12:40",
  endDate: "",
  status: "Em andamento"
};
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
          <ImportProcessRow :ProcessID="proc01.ProcessID" :academicPeriod="proc01.academicPeriod"
            :startDate="proc01.startDate" :endDate="proc01.endDate" :status="proc01.status" />
          <ImportProcessRow :ProcessID="proc02.ProcessID" :academicPeriod="proc02.academicPeriod"
            :startDate="proc02.startDate" :endDate="proc02.endDate" :status="proc02.status" />
          <ImportProcessRow :ProcessID="proc03.ProcessID" :academicPeriod="proc03.academicPeriod"
            :startDate="proc03.startDate" :endDate="proc03.endDate" :status="proc03.status" />


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
