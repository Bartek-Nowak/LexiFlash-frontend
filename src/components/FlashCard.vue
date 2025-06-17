<template>
  <p>{{ front }}</p>
</template>
<script setup lang="ts">
defineProps<{
  front: string;
}>();
</script>
