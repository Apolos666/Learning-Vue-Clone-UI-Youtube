<script setup>
import {ref} from "vue";
import {useSideBar} from "@/Stores/SidebarYoutube.js";
import VideoYoutube from "@/components/Youtube/VideoYoutube.vue";

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

const sideBarPinia = useSideBar();
</script>

<template>
  <div :class="[sideBarPinia.isHideSideBar ? 'ml-2' : 'ml-[360px]' ]">
    <div class="mt-20 pr-6 flex items-center justify-between">
      <div class="font-bold"> Latest </div>
      <div>
        <div class="text-blue-400 cursor-pointer"> Manage </div>
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