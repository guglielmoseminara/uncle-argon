<template>
    <UncleFilterModalFieldBoolean v-if="type == 'boolean'" :value="value" @input='triggerInput($event)' :field-object="fieldObject" :text="fieldObject.text"/>
    <UncleFilterModalFieldEnum v-else-if="type == 'enum'" :value="value" @input='triggerInput($event)' :field-object="fieldObject" :text="fieldObject.text"/>
    <UncleFilterModalFieldResource v-else-if="type == 'resource'" :value="value" @input='triggerInput($event)' :field-object="fieldObject" :text="fieldObject.text"/>
</template>

<script>
    import { FilterFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldAbstractComponent
    }
</script>