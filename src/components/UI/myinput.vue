<template>
  <input
    :type="typeField"
    class="input"
    v-model="model"
    :value="value"
    :class="customClass"
    :placeholder="mask"
  />
</template>

<script setup>
import { computed, defineEmits } from 'vue';
const props = defineProps({
  modelValue: { type: [Array, String] },
  value: { type: [String, Object] },
  typeField: {
    type: String,
    required: false,
    default: 'text',
  },
  customClass: { type: Array, required: false },
  mask: {
    type: String,
    required: false,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss" scoped>
.input {
  &:not([type='checkbox']) {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background: transparent;
    border: 1px solid var(--color-border);
    padding: 0 15px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    &:focus {
      border: 1px solid var(--color-border-focus);
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
