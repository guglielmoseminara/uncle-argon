<template>
    <div>
        <template v-for="(itemObj, index) in value">
            <UncleSummaryWidgetAbstract :item-obj="itemObj" :field-object="fieldObject" :value="value" :key="index">
            </UncleSummaryWidgetAbstract>
        </template>
    </div>
</template>

<script>
    import { SummaryFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent
    }
</script>