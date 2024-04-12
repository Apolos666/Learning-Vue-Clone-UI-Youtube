<script setup>
const props = defineProps({
  imgSrc: String,
  avtSrc: String,
  title: String,
  channelTitle: String,
  viewCount: Number,
  publishedAt: String,
});

</script>

<template>
  <div class="cursor-pointer">
    <div>
      <img class="w-[360px] rounded-lg" :src="imgSrc" alt="">
    </div>
    <div class="mt-4 flex space-x-3">
      <div>
        <img class="w-8 rounded-full" :src="avtSrc" alt="">
      </div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p>{{ channelTitle }} </p>
        <div class="flex space-x-2">
          <p>{{ `${viewCount}K views ` }}</p>
          <p>{{ publishedAt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
