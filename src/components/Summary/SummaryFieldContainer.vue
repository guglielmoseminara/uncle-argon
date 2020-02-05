<template>
    <div class="summary-field__container field">
        <label v-show="fieldObject.type != 'array_image' && !fieldObject.disableLabel" class="label" v-if="!fieldObject.getLabel()">
            {{text}}
        </label>
        <slot></slot>
    </div>
</template>

<script>
    import { SummaryFieldContainerComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldContainerComponent
    }
</script>

<style lang="scss" scoped>
    .summary-field__container.field {
        text-align:left;
        .label {
            color:$primary;
        }
    }
</style>