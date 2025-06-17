<template>
  <select
    @change="changeLanguage"
    :value="currentLocale"
    class="block w-40 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
  >
    <option value="pl">Polski</option>
    <option value="en">English</option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from '@/utils/useLocaleLoader.ts';

const { locale } = useI18n();

const currentLocale = locale.value;

const changeLanguage = async (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newLocale = target.value;
  if (newLocale !== locale.value) {
    await loadLocaleMessages(newLocale);
    locale.value = newLocale;
  }
};
</script>
