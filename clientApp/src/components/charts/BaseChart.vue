<template>
    <div class="dark:text-white">
        <VueApexCharts 
            type="line" 
            :height="height" 
            :options="chartOptions" 
            :series="series"
        ></VueApexCharts>

    </div>
</template>

<script setup>
import { merge, each } from "lodash"
import { computed } from "vue"
import VueApexCharts from "vue3-apexcharts"



const props = defineProps({
    chartType: {
        chart: 'String',
        default: 'bar'
    },
    options: Object,
    height: {
        type: [String, Number],
        default: 100
    },
    series: [Array, Object],
    labels: [Array, Object],
    yaxisShow: {
        type: Boolean,
        default: true
    },
    legendPosition: {
        type: String, //top, bottom
        default: 'bottom'
    },
    title: {
        type: String,
        default: 'Title Goes Here'
    }
})

const colors = computed(() => {
    let colorArray = ['hsl(0 50% 50% / 1)']
    each(props.options.xaxis.categories, (item, index) => {
        colorArray.push(`hsl(${0+(5*index)} 50% 50% / 1)`)
    })
    return colorArray;
})

const chartOptions = computed(() => {
    return merge({
        chart: {
            type: 'line',
            stacked: false,
            toolbar: {
                show: false
            }
        },stroke: {
            width: [3, 3, 3, 3, 4],
            curve: 'smooth'
        },
    }, props.options)
})
</script>