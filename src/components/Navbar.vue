<template>
  <div class="bg-gray-800 p-4 flex justify-between items-center">
    <nav class="flex gap-4 p-2">
      <router-link
        to="/"
        class="text-blue-600 hover:underline"
        active-class="font-bold underline"
        exact
        >{{ $t('pages.home') }}</router-link
      >
      <router-link
        to="/deck-manage"
        class="text-blue-600 hover:underline"
        active-class="font-bold underline"
        >{{ $t('pages.deckManage') }}</router-link
      >
      <router-link
        to="/settings"
        class="text-blue-600 hover:underline"
        active-class="font-bold underline"
        >{{ $t('pages.settings') }}</router-link
      >
    </nav>
    <LanguageSwitcher />
  </div>
</template>
<script setup lang="ts">
import { LanguageSwitcher } from '@/components';
</script>
