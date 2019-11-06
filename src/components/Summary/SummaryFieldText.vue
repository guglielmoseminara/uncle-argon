<template>
    <span class="field-text">{{value}}</span>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .field-text {
        color: $color-text-dark;
        font-weight: 500;
        font-size: $text-small;
        border: 1px solid $border-color;
        display: block;
        padding: 14px;
        border-radius: 4px;
    }
</style>