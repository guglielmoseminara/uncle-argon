<template>
    <UncleListFieldCheckbox v-if="fieldObject.type == 'checkbox'"/>
    <UncleListFieldEnum v-else-if="fieldObject.type == 'enum'" :field-object="fieldObject" :value='row[fieldObject.name]' />
    <UncleListFieldText v-else-if="fieldObject.type == 'text' || fieldObject.type == 'date'" :text='getValue(row, fieldObject)' />
    <UncleListFieldBoolean v-else-if="fieldObject.type == 'boolean'" :text='getValue(row, fieldObject)'/>
    <UncleListFieldArray v-else-if="fieldObject.type == 'array'" :field-object="fieldObject" :value="row[fieldObject.name]" />
    <UncleListFieldAction v-else-if="fieldObject.type == 'actions-list'" :actions-list=fieldObject.getActions() :list-row-object='row' />
</template>

<script>
    import { ListFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: ListFieldAbstractComponent

    }
</script>