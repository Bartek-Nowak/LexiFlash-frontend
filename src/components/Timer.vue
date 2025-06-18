<template>
  <div
    class="flex items-center justify-center text-5xl font-bold text-white bg-gray-800 rounded-xl px-6 py-4 shadow-lg select-none"
  >
    <span>{{ formattedTime }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';

const props = defineProps<{
  seconds: number; // cel: ile sekund ma trwać
}>();

const emit = defineEmits<{
  (e: 'finished'): void;
}>();

const timePassed = ref(0);
const intervalId = ref<number | null>(null);

const formattedTime = computed(() => {
  const minutes = Math.floor(timePassed.value / 60);
  const seconds = timePassed.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
});

const startTimer = () => {
  if (intervalId.value !== null) return;

  intervalId.value = setInterval(() => {
    timePassed.value++;
    if (timePassed.value >= props.seconds) {
      stopTimer();
      emit('finished');
    }
  }, 1000);
};

const stopTimer = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

onMounted(() => {
  timePassed.value = 0;
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});

watch(
  () => props.seconds,
  () => {
    timePassed.value = 0;
    stopTimer();
    startTimer();
  }
);
</script>
