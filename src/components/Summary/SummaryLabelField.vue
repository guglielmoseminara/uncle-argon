<template>
    <label class="label">
        <b>{{labelObject.field.getItemValue(value)}}</b>
    </label>
</template>

<script>

    import { SummaryLabelFieldComponent } from 'uncle-vue';

    export default {
        extends: SummaryLabelFieldComponent
    }
</script>