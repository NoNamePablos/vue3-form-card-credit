<template>
    <div class="layout">
        <slot/>
    </div>
</template>

<script setup>
    name:"Layout"
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>