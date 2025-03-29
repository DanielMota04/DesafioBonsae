<script setup>
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
          <tr>
            <td><strong>proc-1</strong></td>
            <td>2023/2</td>
            <td>15/08/2023, 00:00</td>
            <td>-</td>
            <td><span class="status in-progress">Em Andamento</span></td>
            <td>
              <button class="btn btn-danger">✖ Abortar</button>
              <button class="btn btn-primary">→ Continuar</button>
            </td>
          </tr>
          <tr>
            <td><strong>proc-2</strong></td>
            <td>2023/1</td>
            <td>10/07/2023, 00:00</td>
            <td>15/07/2023, 00:00</td>
            <td><span class="status completed">Concluído</span></td>
            <td>
              <button class="btn btn-secondary">→ Visualizar</button>
            </td>
          </tr>
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

th, td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-weight: bold;
}

.in-progress {
  background: lightblue;
  color: blue;
}

.completed {
  background: lightgreen;
  color: green;
}

.btn {
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 0.5rem;
}
</style>
