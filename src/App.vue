<template>
  <select @change="changeLanguage">
    <option value="pl">Polski</option>
    <option value="en">English</option>
  </select>
  <DeckView />
</template>

<script setup lang="ts">
import DeckView from '@/views/DeckView.vue';
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from '@/utils/useLocaleLoader.ts';

const { locale } = useI18n();

const changeLanguage = async (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newLocale = target.value;
  await loadLocaleMessages(newLocale);
  locale.value = newLocale;
};
</script>
