<template>
    <div class="bg-white dark:bg-slate-700 h-full overflow-y-auto w-[var(--asideWidth)] fixed top-0 border-r dark:border-slate-500 transition-all" :class="asideOpen ? 'left-0' : 'left-[var(--asideWidthM)]'">
        <div class="h-[var(--navHeight)] border-b dark:border-slate-500 flex items-center justify-center text-2xl dark:text-white leading-5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 select-none cursor-pointer">
            ZEALTECH<span class="text-green-500">POS</span>
        </div>
        <div class="">
            <div v-for="(item, index) in layout" :key="index">
                <router-link :to="item.link" v-if="!item.children" @click="() => handleOpen()" exact-active-class="bg-green-500 text-white shadow-md shadow-green-500/30" class="flex justify-between py-2 px-5 items-center hover:bg-green-500 cursor-pointer select-none group text-gray-600 dark:text-white  m-2 rounded-r-xl">
                    <div class="flex items-center cursor-pointer gap-3 font-semibold  group-hover:text-white ">
                        <i :class="item.icon" class="shadow-md p-2 rounded-md bg-slate-50/50 group-hover:text-white"></i>
                        {{ item.name }}
                    </div>
                </router-link>
                <template v-if="item.children">
                    <div @click="handleOpen(item, index)" :class="{ 'bg-green-500 !border-current group  shadow-md shadow-green-500/30': item.active }" class="flex justify-between py-2 px-5 items-center hover:bg-green-500 cursor-pointer select-none group  m-2 rounded-r-xl">
                        <div :class="{ 'text-white': item.active }" class="flex items-center  cursor-pointer gap-3 font-semibold text-gray-600  dark:text-white select-none group-hover:text-white">
                            <i :class="item.icon" class="shadow-md p-2 rounded-md bg-slate-50/50 group-hover:text-white"></i>
                            {{ item.name }}
                        </div>
                        <i :class="{ 'rotate-45 text-white': item.active }" class="fa-solid fa-angle-right transition-all dark:text-white group-hover:text-white"></i>
                    </div>
                    <div v-if="item.active">
                        <div class="pl-11">
                            <div class="border-l border-slate-400">
                                <router-link v-for="(child, index) in item.children" :key="index" :to="child.link" exact-active-class="!text-green-500 !border-current !dark:text-green-500 !dark:border-current" class="dark:text-white flex justify-between py-2 px-3 items-center hover:text-green-500 border-transparent cursor-pointer select-none">
                                    <div class="flex items-center cursor-pointer gap-3 font-semibold">
                                        <span class="w-2 h-2 block bg-current rounded-full "></span>
                                        {{ child.name }}
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <!-- <div class="flex justify-center absolute bottom-20 left-0 right-0">
                <button @click="toggleDark(!isDark)" type="button" class="py-2 px-5 bg-green-400 hover:bg-green-500 border-b-2 border-green-600 text-white rounded-md flex items-center gap-2">
                    <template v-if="isDark">
                        <i class="fa-sharp fa-solid fa-moon-stars"></i>
                        Dark
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-sun-bright"></i>
                        Light
                    </template>
                </button>
            </div> -->
        </div>
    </div>
</template>

<script>
import { asideOpen } from '../../composable/useConfig';
import { layout } from '../../composable/useLayout';
import router from '@/router';
import { find, flow, property, partialRight, some, get } from 'lodash';
// import { useDark, useToggle } from '@vueuse/core';

export default {
    setup() {
        // const isDark = useDark();
        // const toggleDark = useToggle(isDark);

        router.afterEach(function () {
            let currentPath = router.currentRoute.value.path;
            let findChildPath = find(layout.value, flow(
                property('children'),
                partialRight(some, { link: currentPath })
            ))
            if (findChildPath) {
                findChildPath.active = true;
            }
        });

        const handleOpen = (item = null, index = null) => {
            if (!item && !index) {
                closeAll()
                return;
            }
            const oldState = layout.value[index].active;
            closeAll()
            layout.value[index].active = !oldState;
        }

        const closeAll = () => {
            layout.value.forEach(item => {
                if (item.active) {
                    item.active = false
                }
            });
        }
        return {
            asideOpen,
            layout,
            handleOpen,
            // isDark,
            // toggleDark
        }
    }
}

</script>