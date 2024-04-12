import {defineStore} from "pinia";

export const useSideBar = defineStore('counter', {
    state: () => ({
        isHideSideBar: false,
    }),
    getters: {

    },
    actions: {
        toggleSideBar() {
            this.isHideSideBar = !this.isHideSideBar;
        }
    },
})