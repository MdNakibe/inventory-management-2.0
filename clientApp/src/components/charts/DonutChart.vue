<template>
    <VueApexCharts :options="options" :series="series" />
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts"

var series = [44, 55, 41, 17, 15, 40];

var options = {
    chart: {
        type: 'donut',
        width: '80%',
        redrawOnWindowResize: true,
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    legend: {
        position: 'right',
        // width: 100,
    },
    fill: {
        type: 'gradient',
        // type: 'solid',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '20%',
            }
        }
    },
    responsive: [
        {
        breakpoint: 1600,
        options: {
            chart: {
                width: '100%',
                height: 'auto'
            },
            legend: {
                position: 'bottom'
            }
        },
    },
    {
        breakpoint: 1020,
        options: {
            chart: {
                width: '70%',
                height: 'auto',
            },
            legend: {
                position: 'bottom'
            }
        },
    }
]
};
</script>