<script setup>
const props = defineProps({
  name: String,
  active: Boolean
})
</script>

<template>
<div class="flex items-center p-2 hover:bg-gray-200 rounded-lg pb-3 cursor-pointer">
  <div class="w-8 h-8">
    <slot></slot>
  </div>
  <div :class="['ml-8', active ? 'font-bold' : 'font-normal']">
    {{ name }}
  </div>
</div>
</template>