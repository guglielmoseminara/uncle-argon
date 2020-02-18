<template>
    <UncleSummaryFieldText  v-if="type == 'text'" :value="value" :field-object="fieldObject"/>
    <UncleSummaryFieldTextArea  v-else-if="type == 'textarea'" :value="value" :field-object="fieldObject"/>
    <UncleSummaryFieldArray  v-else-if="type == 'array'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldArrayImage  v-else-if="type == 'array_image'" 
        :field-object="fieldObject" 
        :value="value"
    />
    <UncleSummaryFieldImage  v-else-if="type == 'image'" :value="value" :field-object="fieldObject" :has-modal=true />
    <UncleSummaryFieldObject  v-else-if="type == 'object'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldEnum  v-else-if="type == 'enum'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldHidden  v-else-if="type == 'hidden'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldDatetime  v-else-if="type == 'datetime' || type == 'date'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldDateRange  v-else-if="type == 'date_range'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldMap  v-else-if="type == 'map'" :field-object="fieldObject" :value="value"/>
    <component v-else-if="type == 'custom'" :is="fieldObject.component" :value='value' :field-object="fieldObject"/>
</template>

<script>
    import { SummaryFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldAbstractComponent
    }
</script>