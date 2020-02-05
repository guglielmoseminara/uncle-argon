<template>
    <UncleFormFieldText @input='triggerInput' :validator='validator' :value='value' v-if="type == 'text'" :field-object='fieldObject'/>
    <UncleFormFieldPassword @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'password'" :field-object='fieldObject'/>
    <UncleFormFieldTextArea @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'textarea'" :field-object='fieldObject'/>
    <UncleFormFieldEmail @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'email'" :field-object='fieldObject' />
    <UncleFormFieldImage @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'image'" :has-gallery=true :has-modal=true />
    <UncleFormFieldEnum :validator='validator' :value='value' v-else-if="type == 'enum'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
    />
    <UncleFormFieldResource :validator='validator' :value='value' v-else-if="type == 'resource'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
    />
    <UncleFormFieldResourceMany :validator='validator' :value='value' v-else-if="type == 'resource_many'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
    />
    <UncleFormFieldPhone @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'phone'" :field-object='fieldObject'/>
    <UncleFormFieldHidden @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'hidden'" :field-object='fieldObject'/>
    <UncleFormFieldGeoAddress @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'geoaddress'" :field-object='fieldObject'/>
    <UncleFormFieldDateRangeDistinct @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'date_range' && fieldObject.widget == 'distinct'" :field-object='fieldObject'/>
    <component :is="fieldObject.component" @input='triggerInput' :value='value'  v-else-if="type == 'custom'" :field-object="fieldObject"/>
</template>


<script>
    import { FormFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: FormFieldAbstractComponent

    }
</script>