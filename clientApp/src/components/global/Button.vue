<template>
  <button :class="twMerge('bg-green-500 py-2 px-2 text-white hover:opacity-80 rounded font-[600]', $attrs.class)">
    <slot />
  </button>
</template>
  

<script setup>
import { twMerge } from 'tailwind-merge'
</script>