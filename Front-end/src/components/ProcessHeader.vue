<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const backToList = () => {
    router.push("/")
}
</script>

<template>
    <div>
        <p @click="backToList"><i class="bi bi-arrow-left"></i> Voltar para a lista</p>
        <h1>Importação de dados: Processo X</h1>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.7rem;
    font-weight: bold;
}

p {
    color: black;
    font-weight: bold;
    cursor: pointer;
}</style>