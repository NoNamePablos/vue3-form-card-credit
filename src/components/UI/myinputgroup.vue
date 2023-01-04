<template>
  <div class="input-group">
    <label
      class="input__label"
      :class="isCheckbox ? 'input__label-checkbox' : ''"
    >
      <p class="input__name">{{ name }}</p>
      <slot />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: 'Test',
  },
  isCheckbox: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.input {
  &__label {
    display: flex;
    flex-direction: column;
    &-checkbox {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: start;
      & .input__name {
        margin-left: 5px;
        margin-bottom: 0;
        color: var(--color-text);
        font-weight: 500;
      }
    }
  }
  &__name {
    font-weight: 400;
    font-size: 13px;
    color: var(--color-dark-grey);
    margin-bottom: 5px;
    user-select: none;
    cursor: pointer;
  }
  &-group {
    width: 100%;
  }
}
</style>
