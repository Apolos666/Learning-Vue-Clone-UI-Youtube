<script setup>
import SearchBox from "../Youtube/SearchBox.vue";
import TopLeftHeader from "@/components/Youtube/TopLeftHeader.vue";
import TopRightHeader from "@/components/Youtube/TopRightHeader.vue";
</script>

<template>
 <div class="fixed top-0 left-0 w-screen ml-6 py-2 flex items-center flex-auto justify-between bg-white">
   <TopLeftHeader />
   <SearchBox />
   <TopRightHeader />
 </div>
</template>