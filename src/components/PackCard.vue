<template>
  <div class="p-4">
    <div class="flex items-center space-x-4">
      <div class="flex flex-col gap-2">
        <h2 v-if="header" class="text-xl font-semibold uppercase">
          {{ header }}
        </h2>
        <p v-if="description" class="text-gray-600">{{ description }}</p>
        <p v-if="showStats" class="text-gray-600">
          Cards Studied: asdf asdf / asdf afsdf asd f
        </p>
        <div v-if="showButoons" class="flex gap-2">
          <Button
            theme="primary"
            shape="rounded"
            @click="() => router.push('/learning')"
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
import { useRouter } from 'vue-router';
import { Button } from '@/components';

const router = useRouter();

defineProps<{
  header?: string;
  description?: string;
  showButoons?: boolean;
  showStats?: boolean;
}>();
</script>
