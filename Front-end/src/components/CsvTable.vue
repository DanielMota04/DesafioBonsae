<!-- <script setup>
defineProps({
  data: Array
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in Object.keys(data[0] || {})" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template> -->


<!-- <style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    border: 2px solid black;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}
</style> -->



<script setup>
defineProps(['data']);
</script>

<template>
  <div class="process-container">
    <h3>Disciplinas Importadas</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th v-for="header in Object.keys(data[0] || {})" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
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
  border-collapse: collapse;
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
