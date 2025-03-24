<script setup>
defineProps(['csvData']);
</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="header in Object.keys(csvData[0] || {})" :key="header">{{ header }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in csvData" :key="rowIndex">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            </tr>
        </tbody>
    </table>

</template>

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