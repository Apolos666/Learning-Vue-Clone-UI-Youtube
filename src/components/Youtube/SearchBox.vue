<script setup>
import { ref } from "vue"
const toggleInput = ref(false);

const inputClick = () => {
  toggleInput.value = !toggleInput.value;
}
</script>

<template>
  <div class="relative flex items-center justify-center space-x-6">
    <div v-if="toggleInput" class="absolute left-11">
      <svg class="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
        <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
      </svg>
    </div>
    <form class="flex">
      <input :class="['w-[500px]', 'p-3', 'focus:pl-14',
      'border-gray-400',
      'border-[1px]',
      'transition',
      'ease-in-out', 'delay-75',
      'rounded-l-3xl', 'focus:border-blue-400', 'outline-none',
      'focus:shadow-sm', 'focus:shadow-blue-600']" type="text" placeholder="Search" @focus="inputClick" @blur="inputClick" required >
      <button class="px-6 border-gray-400 border-[1px] border-l-0 rounded-r-3xl">
        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
        </svg>
      </button>
    </form>
    <div class="p-4 rounded-full hover:bg-gray-200">
      <svg class="w-6 cursor-pointer" version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
      <path d="M8,11c1.657,0,3-1.343,3-3V3c0-1.657-1.343-3-3-3S5,1.343,5,3v5C5,9.657,6.343,11,8,11z"></path>
              <path d="M13,8V6h-1l0,1.844c0,1.92-1.282,3.688-3.164,4.071C6.266,12.438,4,10.479,4,8V6H3v2c0,2.414,1.721,4.434,4,4.899V15H5v1h6
        v-1H9v-2.101C11.279,12.434,13,10.414,13,8z"></path>
      </svg>
    </div>
  </div>
</template>
