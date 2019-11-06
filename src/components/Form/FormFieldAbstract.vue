<template>
    <UncleFormFieldText @input='triggerInput' :name="name" :validator='validator' :value='value' v-if="type == 'text'"/>
    <UncleFormFieldTextArea @input='triggerInput' :name="name" :validator='validator' :value='value' v-else-if="type == 'textarea'"/>
    <UncleFormFieldEmail @input='triggerInput' :name="name" :validator='validator' :value='value' v-else-if="type == 'email'"/>
    <UncleFormFieldFile @input='triggerInput' :name="name" :validator='validator' :value='value' v-else-if="type == 'file'"/>
    <UncleFormFieldEnum :name="name" :validator='validator' :value='value' v-else-if="type == 'enum'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
    />
    <UncleFormFieldSelectResource :name="name" :validator='validator' :value='value' v-else-if="type == 'resource'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
    />
    <UncleFormFieldPhone @input='triggerInput' :name="name" :validator='validator' :value='value' v-else-if="type == 'phone'"/>
    <UncleFormFieldHidden @input='triggerInput' :name="name" :validator='validator' :value='value' v-else-if="type == 'hidden'"/>
</template>


<script>
    import { FormFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: FormFieldAbstractComponent

    }
</script>