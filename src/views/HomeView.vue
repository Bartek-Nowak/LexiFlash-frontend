<template>
  <div class="text-center mt-10">
    <h1 class="text-3xl font-bold mb-4">
      {{ $t('greeting') }} {{ appName }} 👋
    </h1>
    <p class="mb-8 text-gray-600">{{ $t('introduction') }}</p>
    <div class="flex justify-center gap-4">
      <Button variant="primary" @btn-click="router.push('/learning')">{{
        $t('startLearning')
      }}</Button>
      <Button variant="secondary" @btn-click="router.push('/deck-manage')">{{
        $t('pages.deckManage')
      }}</Button>
    </div>
    <PieChart
      title="Test"
      :data="[
        { value: 100, name: 'Test 1' },
        { value: 20, name: 'Test 2' },
      ]"
    />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Button, PieChart } from '@/components';
import { computed } from 'vue';

const router = useRouter();

const appName = computed(() => import.meta.env.VITE_APP_NAME);
</script>
