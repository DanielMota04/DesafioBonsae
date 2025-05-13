<script setup>
import { computed } from 'vue';
import { useRouter} from 'vue-router';
const props = defineProps(["ProcessID", "academicPeriod", "startDate", "endDate", "status", "currentStep"])

const router = useRouter();

const stepRoutes = {
  1: "/academicPeriod",
  2: "/disciplines",
  3: "/classes",
  4: "/users",
  5: "/LinkTeacherToClass",
  6: "/LinkStudentToClass",
};

const statusClass = computed(() => {
    return props.status === "Em andamento" ? "in-progress" :
           props.status === "Finalizado" ? "completed" : "";
});

function continueProcess(currentStep, ProcessID) {
  const nextStep = currentStep + 1;
  const nextRoute = stepRoutes[nextStep];

  if (nextRoute) {
    router.push(`${nextRoute}/${ProcessID}`);
  } else {
    console.warn("Etapa inválida ou processo já finalizado.");
  }
}

</script>

<template>
    <tr>
        <td><strong>{{ ProcessID }}</strong></td>
        <td>{{ academicPeriod }}</td>
        <td>{{ startDate }}</td>
        <td>{{ endDate === "" ? "-" : endDate}}</td>
        <td><span class="status " :class="statusClass" >{{ status }}</span></td>
        <td v-if="props.status === 'Em andamento'">
            <button class="btn btn-danger">Abortar</button>
            <button class="btn btn-primary" @click="continueProcess(currentStep, ProcessID)">Continuar</button>
        </td>
        <td v-if="props.status === 'Finalizado'">
            <button class="btn btn-secondary">Visualizar →</button>
        </td>
    </tr>
</template>

<style scoped>
td {
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
}

.status {
    padding: 0.25rem 0.5rem;
    font-family: Nunito, sans-serif;
    border-radius: 5px;
    font-weight: 700;
}

.in-progress {
    background: #FEF3C7;
    color: #E5A249;
}

.completed {
    background: #C0E8CA;
    color: #00A22B;
}

.btn {
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.5rem;
    border: none;
}

.btn-danger{
    color: #C20000;
    background: #FFDDDD;
}

.btn-primary{
    color: #0C479D;
    background-color: #E5F0FB;
}

.btn-secondary{
    color: #0C479D;
    background-color: #CECECE;
}

</style>