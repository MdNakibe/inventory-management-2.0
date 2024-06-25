<template>
    <!-- <button :class=""></button> -->
    <td :class="twMerge('border border-slate-300 p-1 font-semibold text-center bg-slate-200 dark:bg-slate-800', $attrs.class)">
        <slot />
    </td>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'
</script>