<script setup>
import "./components/Youtube/tailwind.css";
import HeaderYoutube from "./components/Views/HeaderYoutube.vue"
import SideBarYoutube from "@/components/Views/SideBarYoutube.vue";
import {ref} from "vue";
import HomeYoutube from "@/components/Youtube/HomeYoutube.vue";



</script>

<template>
  <div class="background">
    <HeaderYoutube />
    <SideBarYoutube />
    <router-view />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #e7e7e7;
  border: 1px solid #cacaca;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #363636;
}
</style>