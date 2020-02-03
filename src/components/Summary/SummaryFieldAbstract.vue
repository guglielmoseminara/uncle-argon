<template>
    <UncleSummaryFieldText  v-if="type == 'text'" :value="value" />
    <UncleSummaryFieldTextArea  v-else-if="type == 'textarea'" :value="value" />
    <UncleSummaryFieldArray  v-else-if="type == 'array'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldArrayImage  v-else-if="type == 'array_image'" 
        :field-object="fieldObject" 
        :value="value"
    />
    <UncleSummaryFieldImage  v-else-if="type == 'image'" :value="value" :field-object="fieldObject"/>
    <UncleSummaryFieldObject  v-else-if="type == 'object'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldEnum  v-else-if="type == 'enum'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldDatetime  v-else-if="type == 'datetime'" :field-object="fieldObject" :value="value"/>
    <UncleSummaryFieldMap  v-else-if="type == 'map'" :field-object="fieldObject" :value="value"/>
</template>

<script>
    import { SummaryFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldAbstractComponent
    }
</script>