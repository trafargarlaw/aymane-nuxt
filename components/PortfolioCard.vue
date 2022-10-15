<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="relative w-[540px] h-[320px] bg-red-400 flex items-end text-white"
  >
    <img
      class="h-full top-0 left-0 w-full absolute"
      :src="props.image"
      alt=""
    />
    <span
      class="h-full top-0 left-0 w-full absolute bg-[#1C2536] mix-blend-color"
    ></span>
    <div
      class="z-50 flex px-[30px] py-10 justify-between w-full bg-gradient-to-t from-black to-transparent"
    >
      <div class="flex flex-col gap-[5px]">
        <span class="text-4xl font-bold text-[#EBFA9F] leading-[54px]">{{
          props.title
        }}</span>
        <p>{{ props.subtitle }}</p>
      </div>
      <div class="self-end">
        <button class="px-6 py-3 bg-white font-bold text-[#2A4F4A]">
          see offers
        </button>
      </div>
    </div>
  </div>
</template>
