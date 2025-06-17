<template>
  <p class="text-white font-semibold select-none text-3xl">{{ errors }} ❌</p>
</template>

<script setup lang="ts">
defineProps<{
  errors: number;
}>();
</script>
