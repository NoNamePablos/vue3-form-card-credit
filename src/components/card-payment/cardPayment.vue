<template>
    <div class="card-payment">
        <div class="card-payment__wrapper">
            <div class="card-payment-right">
                <slot name="card-right" />
            </div>
            <div class="card-payment-left">
                <slot name="card-left" />
            </div>
        </div>
    </div>
</template>

<script setup>
    name: "cardPayment"
</script>

<style lang="scss" scoped>
    .card-payment {
        width: 1024px;
        border-radius: 12px;
        padding: 20px;
        background-color: var(--color-white);
        &__wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 20px;
        }
       
    }
</style>