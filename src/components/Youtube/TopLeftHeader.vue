<script setup>
import {useSideBar} from "@/Stores/SidebarYoutube.js";

const sideBarPinia = useSideBar();
</script>

<template>
  <div class="flex items-center">
    <div
        class="cursor-pointer p-4 rounded-full hover:bg-gray-200"
        @click="sideBarPinia.toggleSideBar()"
    >
      <svg class="w-4" version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
      <rect width="16" height="2"></rect>
              <rect y="7" width="16" height="2"></rect>
              <rect y="14" width="16" height="2"></rect>
      </svg>
    </div>
    <div class="flex items-center ml-8 cursor-pointer">
      <svg class="w-9" viewBox="0 0 48 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
        <title>Youtube</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Social-Icons---Isolated" transform="translate(-164.000000, -510.000000)" fill="#FF0002">
            <path d="M183.044,533.269916 L183.0425,519.687742 L196.0115,526.502244 L183.044,533.269916 Z M211.52,517.334163 C211.52,517.334163 211.0505,514.003199 209.612,512.536366 C207.7865,510.610299 205.7405,510.601235 204.803,510.489448 C198.086,510 188.0105,510 188.0105,510 L187.9895,510 C187.9895,510 177.914,510 171.197,510.489448 C170.258,510.601235 168.2135,510.610299 166.3865,512.536366 C164.948,514.003199 164.48,517.334163 164.48,517.334163 C164.48,517.334163 164,521.246723 164,525.157773 L164,528.82561 C164,532.73817 164.48,536.64922 164.48,536.64922 C164.48,536.64922 164.948,539.980184 166.3865,541.447016 C168.2135,543.373084 170.612,543.312658 171.68,543.513574 C175.52,543.885191 188,544 188,544 C188,544 198.086,543.984894 204.803,543.495446 C205.7405,543.382148 207.7865,543.373084 209.612,541.447016 C211.0505,539.980184 211.52,536.64922 211.52,536.64922 C211.52,536.64922 212,532.73817 212,528.82561 L212,525.157773 C212,521.246723 211.52,517.334163 211.52,517.334163 L211.52,517.334163 Z" id="Youtube"></path>
          </g>
        </g>
      </svg>
      <p class="capitalize font-mono text-xl ml-1">premium</p>
    </div>
  </div>
</template>