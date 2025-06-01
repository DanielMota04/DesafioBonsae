<script setup>
// importProcessRow.vue
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(["ProcessID", "academicPeriod", "startDate", "endDate", "status", "currentStep"])
import { deleteImportProcess } from '../services/importProcessService';

const router = useRouter();

const statusClass = computed(() => {
  return props.status === 'Em andamento' ? 'in-progress' : 'completed';
});

const routesStatus = {
  AcademicPeriod: "academicPeriod",
  Discipline: "disciplines",
  Class: "classes",
  User: "users",
  Enrollment: "LinkTeacherToClass"
};


function continueProcess(currentStep, ProcessID) {
  const routePath = routesStatus[currentStep];
  if (routePath) {
    router.push(`${routePath}/${ProcessID}`);
  } else {
    console.warn(`Rota não encontrada para o passo atual: ${currentStep}`);
  }
}


const deleteProcess = async (processID) => {
    try {
        console.log(processID)
        await deleteImportProcess(processID);
    } catch (error) {
        console.error("erro ao deletar processo:", error)
    }
}

</script>

<template>
    <tr>
        <td><strong>{{ ProcessID }}</strong></td>
        <td>{{ academicPeriod }}</td>
        <td>{{ startDate }}</td>
        <td>{{ endDate === "" ? "-" : endDate }}</td>
        <td><span class="status " :class="statusClass">{{ status }}</span></td>
        <td>
            <button v-if="props.status === 'Em andamento'" class="btn btn-danger" @click="deleteProcess(ProcessID)">Abortar</button>
            <button v-if="props.status === 'Em andamento'" class="btn btn-primary"@click="continueProcess(currentStep, ProcessID)">Continuar</button>
            <button v-if="props.status === 'Finalizado'" class="btn btn-secondary">Visualizar →</button>
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

.btn-danger {
    color: #C20000;
    background: #FFDDDD;
}

.btn-primary {
    color: #0C479D;
    background-color: #E5F0FB;
}

.btn-secondary {
    color: #0C479D;
    background-color: #CECECE;
}
</style>