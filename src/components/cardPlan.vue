<template>
  <div class="card-plan">
    <div class="card-plan__img">
      <img :src="logo" :alt="typePlan" />
    </div>
    <div class="card-plan__block">
      <p class="card-plan__type">{{ typePlan }}</p>
      <div class="card-plan__cost">{{ currency }}{{ price }} / month</div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  typePlan: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: false,
    default: '$',
  },
});
const logo = ref();
watchEffect(async () => {
  logo.value = (await import(`../assets/img/${props.img}`)).default;
});
</script>

<style lang="scss" scoped>
.card-plan {
  height: 100px;
  width: calc(100% - 40px);
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  &__img {
    width: 80px;
    border-radius: 12px;
    height: 100%;
    object-fit: cover;
  }
  &__type {
    margin-bottom: 10px;
    color: var(--color-dark-grey);
  }
  &__cost {
    font-weight: 500;
    color: var(--color-text);
  }
  &__block {
    display: flex;
    flex-direction: column;
  }
}
</style>
