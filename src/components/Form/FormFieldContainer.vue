<template>
    <div>
        <label v-show='text'>
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