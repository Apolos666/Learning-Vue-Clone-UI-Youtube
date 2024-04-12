<script setup>
const props = defineProps({
  title: String,
  active: Boolean
})
</script>

<template>
  <div class="flex items-center p-2 hover:bg-gray-200 rounded-lg">
    <div class="w-8">
      <slot></slot>
    </div>
    <div :class="['font-sans', 'capitalize', 'text-lg', 'ml-8', active ? 'font-bold' : 'font-normal']">
      {{ title }}
    </div>
  </div>
</template>
