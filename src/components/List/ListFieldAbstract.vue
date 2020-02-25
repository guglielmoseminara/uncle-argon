<template>
    <UncleListFieldCheckbox v-if="fieldObject.type == 'checkbox'"/>
    <UncleListFieldEnum v-else-if="fieldObject.type == 'enum'" :field-object="fieldObject" :value='row[fieldObject.name]' />
    <UncleListFieldText v-else-if="fieldObject.type == 'text' || fieldObject.type == 'date'" :text='getValue(row, fieldObject)' />
    <UncleListFieldBoolean v-else-if="fieldObject.type == 'boolean'" :text='getValue(row, fieldObject)'/>
    <UncleListFieldArray v-else-if="fieldObject.type == 'array'" :field-object="fieldObject" :value="row[fieldObject.name]" />
    <UncleListFieldUrl v-else-if="fieldObject.type == 'url'" :value='row[fieldObject.name]' />
    <UncleListFieldActionButton v-else-if="fieldObject.type == 'action' && fieldObject.widget == 'button'" :field-object="fieldObject" :params="row" />
    <UncleListFieldActionDropdown v-else-if="fieldObject.type == 'actions-list'" :actions-list=fieldObject.getActions() :list-row-object='row' />
    <component v-else-if="fieldObject.type == 'custom'" :is="fieldObject.component" :value='getValue(row, fieldObject)'/>
</template>

<script>
    import { ListFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: ListFieldAbstractComponent

    }
</script>