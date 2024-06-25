<template>
    <!-- <button :class=""></button> -->
    <td :class="twMerge('border text-left p-1', $attrs.class)">
        <slot />
    </td>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'
</script>