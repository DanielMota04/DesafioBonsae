<script setup>
import ImportProcess from '../components/ImportProcess.vue';
import { useRouter } from 'vue-router';
import { customAlphabet } from 'nanoid'

const router = useRouter();

const newProcess = () => {
  const generateID = customAlphabet('0123456789', 12);
  const newID = generateID();
  router.push(`/academicPeriod/${newID}`)
}

</script>

<template>
  <div class="home-container">
    <div class="title-section">
      <div>
        <h1>Controle de Importação</h1>
        <p>Gerencie seus processos de importação de dados</p>
      </div>
      <button class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
        @click="newProcess">
        +
      </button>
    </div>
    <ImportProcess />
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem;
  background: #eef5ff;
  height: 100vh;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.7rem;
  font-weight: bold;
}

p {
  color: gray;
}

.btn {
  font-weight: bold;
}
</style>