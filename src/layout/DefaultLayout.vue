<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <div class="bg-slate-600 p-1 w-1/4 divide-y">
      <slot name="sidebar">
        <Greeting />
        <DecksList shape="classic" show-header class="text-white" />
      </slot>
    </div>
    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <main class="flex-1">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Greeting, DecksList } from '@/components';
</script>
