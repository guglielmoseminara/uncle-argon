<template>
    <UncleSummaryLabelField v-if="type=='field'" :label-object="labelObject" :value="value"/>
</template>

<script>
    import { SummaryLabelAbstractComponent } from 'uncle-vue';

    export default {
        extends: SummaryLabelAbstractComponent
    }
</script>