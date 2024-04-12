<script setup>
import SideBarItem from "@/components/Youtube/SideBarItem.vue";
import {onBeforeMount, ref} from "vue";
import SideBarYoutuber from "@/components/Youtube/SideBarYoutuber.vue";
import {useSideBar} from "@/Stores/SidebarYoutube.js";

const state = ref({
  items: [
    { id: 1, active: true},
    { id: 2, active: false},
    { id: 3, active: false},
    { id: 4, active: false},
    { id: 5, active: false},
    { id: 6, active: false},
    { id: 7, active: false},
    { id: 8, active: false},
    { id: 9, active: false},
  ]
})

const people = ref({
  youtubers: [
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
    { name: "Foad Alavi", imgSrc: "../../../public/channels4_profile%20(1).jpg"},
  ]
})

const settings = ref({
  setting: [
    { name: "Settings"},
    { name: "Report History"},
    { name: "Help"},
    { name: "Send Feedback"},
  ]
})

const isShowMore = ref(true);

const getMaxId = () => {
  let maxId = 0;
  state.value.items.forEach(item => {
    if (item.id > maxId) {
      maxId = item.id;
    }
  });
  return maxId;
}

onBeforeMount(() => {
  people.value.youtubers.forEach((youtuber, index) => {
    state.value.items.push({ id: getMaxId() + 1, active: false});
  })

  settings.value.setting.forEach((setting, index) => {
    state.value.items.push({ id: getMaxId() + 1, active: false});
  })
})

const toggleShowMore = () => {
  isShowMore.value = !isShowMore.value
}

const toggleActive = (id) => {
   state.value.items.forEach(item => {
    if (item.id === id) {
      item.active = !item.active;
    } else {
      item.active = false;
    }
  })
}

const sideBarPinia = useSideBar();

</script>

<template>
  <div
      class="fixed top-20 bottom-0 side-bar ml-6 w-[300px] overflow-scroll overflow-x-hidden"
      v-if="!sideBarPinia.isHideSideBar"
  >
    <div class="pb-4 w-[270px] border-b-[2px]">
    <router-link to="/" class="cursor-pointer" @click="toggleActive(1)">
      <SideBarItem title="Home" :active="state.items[0].active">
        <svg v-if="state.items[0].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
        <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
      </SideBarItem>
    </router-link>
    <router-link :to="{name: 'Subscriptions'}" class="cursor-pointer" @click="toggleActive(2)">
      <SideBarItem title="Subscriptions" :active="state.items[1].active">
        <svg v-if="state.items[1].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
        <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
      </SideBarItem>
    </router-link>
    <div class="cursor-pointer" @click="toggleActive(3)">
      <SideBarItem title="Youtube Musics" :active="state.items[2].active">
        <svg v-if="state.items[2].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
        <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
      </SideBarItem>
    </div>
  </div>
    <div class="w-[270px] py-4 border-b-[2px]">
      <p class="text-xl cursor-pointer ml-2 mb-2">You ></p>
      <div class="cursor-pointer" @click="toggleActive(4)">
        <SideBarItem title="Your channel" :active="state.items[3].active">
          <svg v-if="state.items[3].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
      <div class="cursor-pointer" @click="toggleActive(5)">
        <SideBarItem title="History" :active="state.items[4].active">
          <svg v-if="state.items[4].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
      <div class="cursor-pointer" @click="toggleActive(6)">
        <SideBarItem title="Playlists" :active="state.items[5].active">
          <svg v-if="state.items[5].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
      <div class="cursor-pointer" @click="toggleActive(7)">
        <SideBarItem title="Watch Later" :active="state.items[6].active">
          <svg v-if="state.items[6].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
      <div class="cursor-pointer" @click="toggleActive(8)">
        <SideBarItem title="Liked Videos" :active="state.items[7].active">
          <svg v-if="state.items[7].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
      <div class="cursor-pointer" @click="toggleActive(9)">
        <SideBarItem title="Downloads" :active="state.items[8].active">
          <svg v-if="state.items[8].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
    </div>
    <div class="w-[270px] py-4 border-b-[2px]">
      <p class="text-xl cursor-pointer ml-2 mb-3 font-semibold">Subscription</p>
      <SideBarYoutuber v-for="(youtuber, index) in isShowMore ? people.youtubers.slice(0, 5) : people.youtubers" :key="index" :active="state.items[getMaxId() - people.youtubers.length + index].active" :name="youtuber.name" @click="toggleActive(getMaxId() - people.youtubers.length + 1 + index)">
        <img class="rounded-full" :src="youtuber.imgSrc" alt="">
      </SideBarYoutuber>
      <div v-if="isShowMore" class="hover:bg-gray-200 p-3 rounded-full cursor-pointer" @click="toggleShowMore">
        Show More
      </div>
      <div v-else class=" hover:bg-gray-200 p-3 rounded-full cursor-pointer" @click="toggleShowMore">
        Show Less
      </div>
    </div>
    <div class="w-[270px] py-4 border-b-[2px]">
      <div v-for="(setting, index) in settings.setting" class="cursor-pointer" @click="toggleActive(getMaxId() - settings.setting.length + 1 + index)">
        <SideBarItem :title="setting.name" :active="state.items[getMaxId() - settings.setting.length + index].active">
          <svg v-if="state.items[getMaxId() - settings.setting.length + index].active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_38" data-name="Layer 38"><path d="M53.45,29.79A1.51,1.51,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.54,1.54,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35c.14,0,3.09,0,3.1,0A1.51,1.51,0,0,0,53.45,29.79Z"></path></g></svg>
          <svg v-else version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path d="M40.348,23.401l-15-10.909c-0.351-0.256-0.826-0.256-1.177,0l-15,10.909c-0.446,0.324-0.545,0.95-0.22,1.396
	c0.325,0.447,0.949,0.544,1.397,0.221l1.974-1.436v13.718c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1v-9.393h4.725v9.393
	c0,0.553,0.448,1,1,1h8.075c0.552,0,1-0.447,1-1V23.583l1.974,1.436c0.178,0.129,0.384,0.191,0.587,0.191
	c0.309,0,0.614-0.143,0.81-0.412C40.894,24.352,40.794,23.726,40.348,23.401z M35.197,36.301h-6.075v-9.393c0-0.553-0.448-1-1-1
	h-6.725c-0.552,0-1,0.447-1,1v9.393h-6.075V22.128l10.438-7.591l10.438,7.591V36.301z"></path>
</svg>
        </SideBarItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-bar::-webkit-scrollbar {
  width: 6px;
}

.side-bar::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #e7e7e7;
  border: 1px solid #cacaca;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

.side-bar::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #363636;
}
</style>
