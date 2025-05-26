<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['data']);
const emits = defineEmits(['save']);

const currentPage = ref(1);
const itemsPerPage = 9;

const totalPages = computed(() =>
  Math.ceil(props.data.length / itemsPerPage)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return props.data.slice(start, start + itemsPerPage);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
</script>

<template>
  <div class="process-container">
    <h3>Disciplinas Importadas</h3>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th v-for="header in Object.keys(data[0] || {})" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in paginatedData" :key="rowIndex">
            <td v-for="(cell, header) in row" :key="header">
              <input v-model="row[header]" class="cell-input" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="save-all">
      <button class="btn-save" @click="$emit('save')">Salvar todas as alterações</button>
    </div>


    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Próxima</button>
    </div>
  </div>
</template>

<style scoped>
.cell-input {
  width: 100%;
  border: none;
  background: transparent;
  padding: 4px;
}

.cell-input:focus {
  outline: 1px solid var(--color-primary);
  background: var(--color-bg-input);
}

.process-container {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px grey;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Nunito';
  color: #0c479d;

}


table {
  min-width: 1000px;
  width: 100%;
  border: 2px solid #E5F0FB;
  border-collapse: collapse;
}

.table-container {
  margin-top: 1rem;
  overflow-x: auto;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #1161d8 transparent;
}

.table-container::-webkit-scrollbar {
  height: 4px;
}

.table-container::-webkit-scrollbar-thumb {
  background-color: #1161d8;
  border-radius: 4px;
}

.table-container::-webkit-scrollbar-track {
  background-color: transparent;
}


thead {
  background: #E5F0FB;
  text-align: left;
  color: #0C479D;
  font-family: 'Nunito';
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #E5F0FB;
  white-space: nowrap;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
}

.pagination button {
  padding: 6px 12px;
  border: none;
  background-color: #1161D8;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-save {
  background-color: #1161D8;
  color: white;
  border: none;
  padding: 10px 22px;
  margin-top: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
</style>
