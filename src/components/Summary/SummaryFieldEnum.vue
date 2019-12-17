<template>
    <span class="field-text">
        {{getItemValue(this.value)}}
    </span>
</template>

<script>

    import { SummaryFieldEnumComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldEnumComponent
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