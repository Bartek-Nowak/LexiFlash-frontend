<template>
  <button
    :class="[baseClasses, colorClasses, shapeClasses, disabledOrLoadingClasses]"
    @click="handleClick"
    :disabled="isDisabled"
  >
    <template v-if="props.theme === 'loading' || props.shape === 'loading'">
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
  theme: {
    type: String,
    default: 'primary',
    validator: (v: string) =>
      [
        'primary',
        'secondary',
        'danger',
        'success',
        'warning',
        'disabled',
        'loading',
        'outline',
      ].includes(v),
  },
  shape: {
    type: String,
    default: 'rounded',
    validator: (v: string) =>
      ['rounded', 'pill', 'square', 'circle', 'loading'].includes(v),
  },
});

const emit = defineEmits(['btn-click']);

const isDisabled = computed(() => {
  return (
    props.theme === 'disabled' ||
    props.theme === 'loading' ||
    props.shape === 'loading'
  );
});

const baseClasses =
  'font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

const colorClasses = computed(() => {
  switch (props.theme) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    case 'secondary':
      return 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400';
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
    case 'success':
      return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500';
    case 'warning':
      return 'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-400';
    case 'disabled':
      return 'bg-gray-400 text-gray-700 cursor-not-allowed';
    case 'loading':
      return 'bg-gray-400 text-gray-700 cursor-wait opacity-70';
    case 'outline':
      return 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500';
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }
});

const shapeClasses = computed(() => {
  switch (props.shape) {
    case 'rounded':
      return 'px-4 py-2 rounded-md';
    case 'pill':
      return 'px-6 py-2 rounded-full';
    case 'square':
      return 'w-10 h-10 flex items-center justify-center rounded-md';
    case 'circle':
      return 'w-10 h-10 flex items-center justify-center rounded-full';
    case 'loading':
      return '';
    default:
      return 'px-4 py-2 rounded-md';
  }
});

const disabledOrLoadingClasses = computed(() => {
  if (isDisabled.value) {
    return props.theme === 'loading'
      ? 'cursor-wait opacity-70'
      : 'cursor-not-allowed opacity-50';
  }
  return '';
});

function handleClick(event: Event) {
  if (isDisabled.value) {
    event.preventDefault();
    return;
  }
  emit('btn-click');
}
</script>
