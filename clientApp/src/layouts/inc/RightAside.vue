<template>
    <div 
        class="fixed top-0 w-[var(--asideWidth)] h-screen z-[901] bg-white dark:bg-slate-700 rightSizeShadow transition-all duration-300"
        :class="rightAsideOpen ? 'right-0' : 'right-[calc(var(--asideWidthM)-20px)]'"
        ref="rightAsideTarget"
    >
        <div class="h-[var(--navHeight)] p-4 border-b dark:border-slate-500 flex items-center gap-5">
            <div class="bg-green-100 grid justify-center items-center rounded-full p-1 w-[50px] h-[50px] cursor-pointer">
                <i class="fa-solid fa-user-tie text-2xl text-green-600"></i>
            </div>
            <div class="flex-1 leading-5">
                <p class="font-semibold dark:text-white">Mr. Nasir</p>
                <p class="text-slate-500 dark:text-white/80">admin</p>
            </div>
        </div>
        
        <div class="py-4">
            <a href="./profile-setting" class="flex justify-between py-2 px-4 items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer">
                <div class="flex items-center  cursor-pointer gap-3 text-gray-700 dark:text-white">
                    <i class="fa-solid fa-gear"></i>
                    <p class="text-[13px]">Profile Setting</p>
                </div>
            </a>
            <div  class="flex justify-between py-2 px-4 items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer" @click="Logout">
                <div class="flex items-center  cursor-pointer gap-3 text-gray-700 dark:text-white">
                    <i class="fa-solid fa-user-tie text-xl"></i>
                    <p class="text-[13px]">Sign Out</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { rightAsideOpen } from '../../composable/useConfig';
import { onClickOutside } from '@vueuse/core'
import { ref, watch, watchEffect } from 'vue';
import store from '@/store';
import router from '@/router';

const rightAsideTarget = ref(null)

const Logout = () => {
    rightAsideOpen.value = false;
        store.dispatch('user/logout')
            .then(() => {
                router.push({ name: 'login'})
            })
            .catch((error) => {
              // Handle errors if any
              console.error(error);
            });
    };
watch(rightAsideOpen, () => {
    if (rightAsideOpen.value) {
        onClickOutside(rightAsideTarget, () => {
            rightAsideOpen.value = false;
        })
    }
})


</script>