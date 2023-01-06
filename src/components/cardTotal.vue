<template>
  <div class="total">
    <div class="total__text">{{ text }}</div>
    <div class="total__value">{{ currency }}{{ value }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: false,
    default: '$',
  },
});
</script>

<style lang="scss" scoped>
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__text {
    color: var(--color-dark-grey);
    font-size: 13px;
  }
  &__value {
    font-weight: 500;
  }
  &-summary {
    border-top: 1px solid var(--color-dark-grey);
    padding-top: 15px;
  }
}
</style>
