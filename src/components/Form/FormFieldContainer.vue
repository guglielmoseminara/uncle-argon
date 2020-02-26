<template>
    <div class="form-field__container form-group">
        <label v-show='text && (!fieldObject || (fieldObject && !fieldObject.disableLabel))'>
            {{text}}
        </label>
        <slot></slot>
    </div>
</template>

<script>
    import { FormFieldContainerComponent } from 'uncle-vue';

    export default {
        extends: FormFieldContainerComponent
    }
</script>

<style lang="scss" scoped>
    .form-field__container {
        text-align:left;
        label {
            color:$primary;
        }
    }
</style>