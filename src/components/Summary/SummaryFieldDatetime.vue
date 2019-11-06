<template>
    <span class="field-text">{{ getFormattedDatetime() }}</span>
</template>

<script>
    import { SummaryFieldDatetimeComponent } from 'uncle-vue';
    export default {
        extends: SummaryFieldDatetimeComponent,
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