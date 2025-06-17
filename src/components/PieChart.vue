<template>
  <div class="max-w-xl mx-auto p-4 bg-white rounded shadow">
    <VChart :option="pieChartOption" style="height: 300px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string;
  data?: Array<{ value: number; name: string }>;
}>();

const pieChartOption = ref({
  title: {
    text: props.title,
    left: 'center',
    top: '20',
    textStyle: {
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'horizontal',
    bottom: '10%',
    data: () => props.data?.map((item) => item.name) || [],
  },
  series: [
    {
      name: 'Categories',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'],
      data: props.data || [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: {
        formatter: '{b}: {d}%',
      },
    },
  ],
});
</script>
