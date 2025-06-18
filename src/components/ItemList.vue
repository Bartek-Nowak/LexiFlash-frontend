<template>
  <div :class="[containerClass]">
    <h2 v-if="header" :class="headerClass">
      {{ header }}
    </h2>

    <ul :class="listClass">
      <li
        v-for="item in items"
        :key="item.id"
        class="relative group cursor-pointer overflow-hidden"
        :class="itemClass"
        @click="$emit('item-selected', item)"
      >
        <div
          class="absolute left-0 top-0 h-full w-1 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>

        <div class="flex justify-between items-center">
          <span :class="textClass">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  items: Array<{ id: string; name: string }>;
  theme?: 'dark' | 'light' | 'transparent';
  shape?: 'classic' | 'minimal' | 'bordered' | 'accent-hover';
  header?: string;
}>();

const themeClass = computed(() => {
  switch (props.theme) {
    case 'light':
      return 'bg-white text-gray-800';
    case 'dark':
      return 'bg-gray-900 text-white';
    case 'transparent':
      return '';
  }
});

const shapeClass = computed(() => {
  switch (props.shape) {
    case 'minimal':
      return 'text-gray-900 p-0';
    case 'bordered':
      return 'border border-gray-300 shadow-sm p-4';
    case 'accent-hover':
      return 'shadow-md p-4 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 transition-colors';
    case 'classic':
    default:
      return 'p-4';
  }
});

const containerClass = computed(() => {
  return `${themeClass.value} ${shapeClass.value}`;
});

const headerClass = computed(() => {
  if (props.shape === 'bordered') return 'text-xl font-bold mb-3';
  return 'text-2xl font-semibold mb-4';
});

const listClass = computed(() => {
  switch (props.shape) {
    case 'bordered':
      return 'divide-y divide-gray-300';
    case 'minimal':
      return '';
    case 'accent-hover':
      return 'divide-y divide-white/20';
    case 'classic':
      return 'divide-y divide-white/10';
    default:
      return '';
  }
});

const itemClass = computed(() => {
  switch (props.shape) {
    case 'minimal':
      return 'py-1';
    case 'accent-hover':
      return 'p-4';
    case 'bordered':
      return 'p-3 hover:bg-gray-50 rounded';
    case 'classic':
    default:
      return 'p-4';
  }
});

const textClass = computed(() => {
  if (props.shape === 'bordered') return 'text-lg font-medium';
  if (props.shape === 'minimal') return 'text-base';
  return 'text-lg font-medium';
});
</script>
