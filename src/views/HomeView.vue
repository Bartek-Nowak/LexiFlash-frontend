<template>
  <DefaultLayout>
    <PackCard
      pack-name="1"
      icon-url="1"
      :mastery="1"
      :cardsStudied="{ current: 1, total: 1 }"
    />
    <DecksList />
  </DefaultLayout>
</template>
<script setup lang="ts">
import { DefaultLayout } from '@/layout';
import { DecksList, PackCard } from '@/components';
</script>
