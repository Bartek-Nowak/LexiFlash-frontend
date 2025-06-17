<template>
  <div class="text-center mt-10">
    <h1 class="text-3xl font-bold mb-4">Witaj w LexiFlash 👋</h1>
    <p class="mb-8 text-gray-600">Ucz się szybciej dzięki fiszkom</p>
    <div class="flex justify-center gap-4">
      <Button variant="primary" @btn-click="router.push('/deck-list')"
        >Rozpocznij naukę</Button
      >
      <Button variant="secondary" @btn-click="router.push('/deck-manage')"
        >Zarządzaj taliami</Button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button } from '@/components';

const router = useRouter();
</script>
