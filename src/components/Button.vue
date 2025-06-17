<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
    :disabled="props.variant === 'disabled' || props.variant === 'loading'"
  >
    <template v-if="props.variant === 'loading'">
      {{ $t('loading') }}
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'danger', 'disabled', 'loading'].includes(value),
  },
});

const buttonClasses = computed(() => {
  const base = 'px-4 py-2 rounded font-semibold transition-colors duration-200';

  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    disabled: 'bg-gray-400 text-gray-700 cursor-not-allowed',
    loading: 'bg-gray-400 text-gray-700 cursor-wait opacity-70',
  };

  return `${base} ${variants[props.variant] || variants.primary}`;
});

function handleClick(event: Event) {
  if (props.variant === 'disabled' || props.variant === 'loading') {
    event.preventDefault();
    return;
  }
  emit('btn-click');
}

const emit = defineEmits(['btn-click']);
</script>
