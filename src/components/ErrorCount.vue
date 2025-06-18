<template>
  <p class="font-semibold select-none text-3xl">{{ errors }} ❌</p>
</template>

<script setup lang="ts">
defineProps<{
  errors: number;
}>();
</script>
