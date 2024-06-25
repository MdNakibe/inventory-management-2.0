<template>
    <div>
        <BaseChart :height="300" :series="series" :options="options"/>
    </div>
</template>

<script setup>
// import VueApexCharts from 'vue-apexcharts'
import BaseChart from './BaseChart.vue'
import { get, map } from "lodash";
import { computed } from 'vue'


const series = [{
    name: 'TEAM A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
    name: 'TEAM B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
    name: 'TEAM C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}];

const options = computed(() => {
    return {
        title: {
            text: '',
            align: 'left',
            offsetX: 0
        },
        legend: {
            show: true
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
        }
    }
})

</script>