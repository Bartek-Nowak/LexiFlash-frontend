<template>
  <div class="flex w-full items-center p-5">
    <ProgressBar class="flex-grow" :progress="progress" />
    <ErrorCount :errors="errors" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ErrorCount, ProgressBar } from '@/components';

const errors = ref(0);
const progress = ref(0);
</script>
