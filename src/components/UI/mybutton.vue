<template>
   <button :type="type" class="button" :class="clases">
   <slot/>
   </button>
</template>

<script setup>
const props = defineProps({
  type:{
    type:String,
    required:false,
    default:'button'
  },
  clases:{
    type:Array,
    required:false,
  }
})
</script>

<style lang="scss" scoped>
.button {
    outline: none;
    border: 6px;
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    border-radius: 6px;
    &:hover {
      transition: all 0.3s ease-in-out;
      opacity: 0.8;
    }
    &-primary {
      transition: all 0.3s ease-in-out;
      background-color: var(--color-blue-primary);
      color: var(--color-white);
      font-size: 14px;
    }
    &-transparent {
      background-color: transparent;
      border: none;
      border-radius: 0;
      width: max-content;
      border-bottom: 1px solid var(--color-blue-primary);
      transition: all 0.3s ease-in-out;
      &:hover {
        transition: all 0.3s ease-in-out;
        opacity: 0.8;
      }
    }
  }
</style>