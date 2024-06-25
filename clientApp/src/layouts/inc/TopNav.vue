<template>
    <div class="bg-white dark:bg-slate-700 w-full h-[var(--navHeight)] border-b dark:border-slate-500 flex justify-between items-center px-5 sticky top-0 z-[900]">
        <button @click="asideOpen = !asideOpen" class="dark:text-white">
            <i class="fa-sharp fa-solid fa-bars text-2xl"></i>
        </button>
        <div class="flex items-center gap-3">
            <div class=""></div>
            <div class="text-slate-600 dark:text-white font-semibold">
                {{ clockTime }}
            </div>

            <div class="flex justify-center">
                <button @click="toggleDark(!isDark)" type="button" class="p-2 bg-green-400 hover:bg-green-500 text-white rounded-full flex items-center gap-2">
                    <template v-if="isDark">
                        <i class="fa-sharp fa-solid fa-moon-stars"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-sun-bright"></i>
                    </template>
                </button>
            </div>

            <button type="button" @click="rightAsideOpen = !rightAsideOpen" class="bg-slate-200 grid justify-center items-center rounded-full p-1 w-10 h-10">
                <i class="fa-duotone fa-user"></i>
            </button>
        </div>
    </div>
</template>


<!-- <script setup>
import { asideOpen, rightAsideOpen } from '@/composable/useConfig';
import { onMounted, ref } from 'vue';
import moment from 'moment'

const clockTime = ref()

onMounted(() => {
    clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
    setInterval(()=>{
        clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000)
})

</script> -->


<script>
import { asideOpen, rightAsideOpen } from '@/composable/useConfig';
import { onMounted, ref } from 'vue';
import moment from 'moment';
import { useDark, useToggle } from '@vueuse/core';


export default {
    data() {
        return {
            asideOpen: asideOpen,
            rightAsideOpen: rightAsideOpen,
        }
    },

    setup() {
        const clockTime = ref();
        const isDark = useDark();
        const toggleDark = useToggle(isDark);

        onMounted(() => {
            clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            setInterval(() => {
                clockTime.value = moment().format('MMMM Do YYYY, h:mm:ss a');
            }, 1000)
        })
        return {
            clockTime,
            isDark,
            toggleDark,
        }
    }
}

</script>