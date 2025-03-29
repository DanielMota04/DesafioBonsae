<script setup>
import ImportProcess from '../components/ImportProcess.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const newProcess = () => {
  router.push("/periodoLetivo")
}

</script>

<template>
  <div class="home-container">
    <div class="title-section">
      <div>
        <h1>Controle de Importação</h1>
        <p>Gerencie seus processos de importação de dados</p>
      </div>
      <button class="btn btn-primary" @click="newProcess">+ Novo Processo</button>
    </div>
    <ImportProcess />
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem;
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
</style>