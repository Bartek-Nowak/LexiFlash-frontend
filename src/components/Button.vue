<template>
  <button :class="buttonClasses" @click="$emit('btn-click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'danger'].includes(value),
  },
});

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 rounded font-semibold transition-colors duration-200';

  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return `${base} ${variants[props.variant] || variants.primary}`;
});
</script>
