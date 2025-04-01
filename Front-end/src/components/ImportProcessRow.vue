<script setup>
import { computed } from 'vue';
const props = defineProps(["ProcessID", "academicPeriod", "startDate", "endDate", "status"])

const statusClass = computed(() => {
    return props.status === "Em andamento" ? "in-progress" :
           props.status === "Finalizado" ? "completed" : "";
});

</script>

<template>
    <tr>
        <td><strong>{{ ProcessID }}</strong></td>
        <td>{{ academicPeriod }}</td>
        <td>{{ startDate }}</td>
        <td>{{ endDate === "" ? "-" : endDate}}</td>
        <td><span class="status " :class="statusClass" >{{ status }}</span></td>
        <td v-if="props.status === 'Em andamento'">
            <button class="btn btn-danger">✖ Abortar</button>
            <button class="btn btn-primary">→ Continuar</button>
        </td>
        <td v-if="props.status === 'Finalizado'">
            <button class="btn btn-secondary">→ Visualizar</button>
        </td>
    </tr>
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