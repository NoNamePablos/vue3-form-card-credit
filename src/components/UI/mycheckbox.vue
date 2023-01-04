<template>
    <div class="checkbox">
        <input type="checkbox"   v-model="model" :value="value"  class="checkbox-hidden">
        <div class="checkbox-fake"></div>
    </div>
</template>

<script setup>
 import { computed, defineEmits } from "vue";
const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
    .checkbox {
        &-fake {
            width: 18px;
            height: 18px;
            border-radius: 3px;
            border: 1px solid var(--color-border);
        }
        & input {
            &:not(:disabled):not(:checked)+.checkbox-fake:hover {
                border-color: var(--color-blue-primary);
            }
            &:not(:disabled):active+.checkbox-fake {
                background-color: var(--color-blue-primary);
                border-color: var(--color-blue-primary);
            }
            &:focus+.checkbox-fake {
                transition: all 0.3s ease-in-out;
                box-shadow: 0 0 0 3px rgba(21, 107, 199, 0.616);
            }
            &:checked+.checkbox-fake {
                background-color: var(--color-blue-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease-in-out;
                &::before {
                    content: "";
                    display: inline-block;
                    margin: 0 auto;
                    width: 16px;
                    height: 16px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    transition: all 0.3s ease-in-out;
                    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1jaGVjazIiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTEzLjg1NCAzLjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtNyA3YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDYuNSAxMC4yOTNsNi42NDYtNi42NDdhLjUuNSAwIDAgMSAuNzA4IDB6Ii8+Cjwvc3ZnPg==");
                }
            }
        }
        &-hidden {
            opacity: 0;
            position: absolute;
            z-index: -1;
            width: 1px;
            height: 1px;
        }
    }
</style>