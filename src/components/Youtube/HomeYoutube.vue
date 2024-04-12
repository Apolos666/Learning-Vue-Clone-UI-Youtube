<script setup>
import {ref} from "vue";
import {useSideBar} from "@/Stores/SidebarYoutube.js";
import VideoYoutube from "@/components/Youtube/VideoYoutube.vue";

const suggestBarData = ref({
  items: [
    { title: "All", active: true},
    { title: "Gaming", active: false},
    { title: "Counter-Strike 2", active: false},
    { title: "Video game development", active: false},
    { title: "Music", active: false},
    { title: "Mixes", active: false},
    { title: "C#", active: false},
    { title: "APIs", active: false},
    { title: "Web Development", active: false},
    { title: "Manga", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
    { title: "Algorithms", active: false},
  ]
});

const videoData = ref({
  videos: [
    {imgSrc: 'https://i.ytimg.com/vi/20nJt5u5BvQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmCv3M3o17sfRPLJ7u3cHKc9O5-A',
      avtSrc: 'https://yt3.ggpht.com/cek0YRa0U5pjGNX1ChHPgetj-rz-qpgrLP2l_tBu3xAFFO31W6VScarmMJNkUhx_-81qRCmO7w=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/gtd9S2Y8CU0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBgqbXHe6flBlgT25LguffdZtxpoA',
      avtSrc: 'https://yt3.ggpht.com/hJfm57XxOmJNL4aKNdERKmu2BPqltxpzN9u9kffhUcNf9OOCoCufUEEfmwftRzO50mdxJbPAEw=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/eEhrehAVtVo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxUXpg2rHr-c1gKmBd_DdArKHdqw',
      avtSrc: 'https://yt3.ggpht.com/OilS_Ih6F9dkuIPSQrYPVniC2WxSkscfaIYZFyDyXt027e9uI5GflKQgMlOToe37xAUeZySSTw=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/20nJt5u5BvQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmCv3M3o17sfRPLJ7u3cHKc9O5-A',
      avtSrc: 'https://yt3.ggpht.com/cek0YRa0U5pjGNX1ChHPgetj-rz-qpgrLP2l_tBu3xAFFO31W6VScarmMJNkUhx_-81qRCmO7w=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/20nJt5u5BvQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmCv3M3o17sfRPLJ7u3cHKc9O5-A',
      avtSrc: 'https://yt3.ggpht.com/cek0YRa0U5pjGNX1ChHPgetj-rz-qpgrLP2l_tBu3xAFFO31W6VScarmMJNkUhx_-81qRCmO7w=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/20nJt5u5BvQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmCv3M3o17sfRPLJ7u3cHKc9O5-A',
      avtSrc: 'https://yt3.ggpht.com/cek0YRa0U5pjGNX1ChHPgetj-rz-qpgrLP2l_tBu3xAFFO31W6VScarmMJNkUhx_-81qRCmO7w=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
    {imgSrc: 'https://i.ytimg.com/vi/20nJt5u5BvQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmCv3M3o17sfRPLJ7u3cHKc9O5-A',
      avtSrc: 'https://yt3.ggpht.com/cek0YRa0U5pjGNX1ChHPgetj-rz-qpgrLP2l_tBu3xAFFO31W6VScarmMJNkUhx_-81qRCmO7w=s68-c-k-c0x00ffffff-no-rj',
      title: 'ohnePixel reviews Workshop Skins',
      channelTitle: 'dogsushi enjoyer',
      viewCount: 23,
      publishedAt: '3 months ago',},
  ]
})

const toggleActive = (id) => {
  suggestBarData.value.items.forEach((item, index) => {
    item.active = index === id;
  });
}

const sideBarPinia = useSideBar();
</script>

<template>
  <div :class="[sideBarPinia.isHideSideBar ? 'ml-2' : 'ml-[360px]']">
    <div :class="['mt-20', 'flex', 'items-center', 'overflow-scroll', 'scroll-bar']" >
      <div
          :class="['cursor-pointer', 'p-3', 'rounded-lg', 'mr-2', suggestBarData.items[index].active ? 'bg-black text-white' : 'bg-gray-300 text-black', 'w-auto', 'whitespace-nowrap',  ]"
          v-for="(item, index) in suggestBarData.items"
          :key="index"
          @click="toggleActive(index)"
      >
        {{ `${item.title}` }}
      </div>
    </div>
    <div :class="[sideBarPinia.isHideSideBar ? 'grid-cols-4' : 'grid-cols-3' ,'grid', 'mt-4', 'gap-4']">
      <VideoYoutube
          v-for= "(video, index) in videoData.videos"
          :key= "index"
          :imgSrc= "video.imgSrc"
          :avtSrc= "video.avtSrc"
          :title= "video.title"
          :channelTitle= "video.channelTitle"
          :viewCount= "video.viewCount"
          :publishedAt= "video.publishedAt"
      />
    </div>
  </div>
</template>

<style scoped>
.scroll-bar::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}

.scroll-bar::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #e7e7e7;
  border: 1px solid #cacaca;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

.scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #363636;
}
</style>