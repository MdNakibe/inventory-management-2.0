<template>
    <div class="w-full h-full flex">
        <Aside />
        <div 
            class="w-full h-full transition-all"
            :class="{'pl-[var(--asideWidth)]' : asideOpen}"
        >
            <TopNav />
            <RightAside />
            <div class="p-5">
                <slot />
            </div>
        </div>
    </div>
    <!-- <slot /> -->
</template>

<script setup>
import Aside from './inc/Aside.vue';
import TopNav from './inc/TopNav.vue';

import { asideOpen } from '../composable/useConfig';
import RightAside from './inc/RightAside.vue';

</script>