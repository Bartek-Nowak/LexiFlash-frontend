<template>
  <div class="p-4">
    <div class="flex items-center space-x-4">
      <div class="flex flex-col gap-2">
        <h2 v-if="header" class="text-xl font-semibold uppercase">
          {{ header }}
        </h2>
        <p v-if="description" class="text-gray-600">{{ description }}</p>
        <p class="text-gray-600">Cards Studied: asdf asdf / asdf afsdf asd f</p>
        <div class="flex gap-2">
          <Button
            theme="primary"
            shape="rounded"
            @click="() => console.log('Start clicked')"
            >Start Studying</Button
          >
          <Button
            theme="outline"
            shape="rounded"
            @click="() => console.log('Share clicked')"
            >Share</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from '@/components';

defineProps<{
  header?: string;
  description?: string;
}>();
</script>
