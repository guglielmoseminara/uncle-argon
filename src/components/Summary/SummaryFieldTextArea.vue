<template>
    <span class="field-text">{{value}}</span>
</template>

<script>
    import { SummaryFieldComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldComponent
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
        min-height: 150px;
    }
</style>