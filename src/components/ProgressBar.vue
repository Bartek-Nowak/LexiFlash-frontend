<template>
  <div class="p-4">
    <div class="w-full bg-gray-300 rounded-full h-4">
      <div
        class="bg-blue-600 h-4 rounded-full transition-all duration-500"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  progress: number;
}>();
</script>
