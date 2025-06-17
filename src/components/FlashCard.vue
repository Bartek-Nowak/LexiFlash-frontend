<template>
  <p class="text-blue-700">{{ front }}</p>
</template>
<script setup lang="ts">
defineProps<{
  front: string;
}>();
</script>
