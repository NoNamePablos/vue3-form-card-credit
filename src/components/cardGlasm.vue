<template>
  <div class="card-glasm">
    <div class="card-glasm__ico">
      <img :src="logo" :alt="title" />
    </div>
    <p class="card-glasm__title" v-if="isEmptyText">
      {{ title }}
    </p>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import { watchEffect, ref } from 'vue';
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});
const isEmptyText = computed(() => {
  return props.title.length > 0 ? true : false;
});

const logo = ref();
watchEffect(async () => {
  logo.value = (await import(`../assets/img/${props.img}`)).default;
});
</script>

<style lang="scss" scoped>
.card-glasm {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(11px) saturate(190%);
  -webkit-backdrop-filter: blur(11px) saturate(190%);
  background-color: rgba(17, 25, 40, 0.44);
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__ico {
    margin-bottom: 10px;
  }
  &__title {
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
}
</style>
