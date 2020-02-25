<template>
    <UncleFormFieldText @input='triggerInput' :validator='validator' :value='value' v-if="type == 'text'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldPassword @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'password'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldTextArea @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'textarea'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldEmail @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'email'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldImage @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'image'" :has-gallery=true :has-modal=true :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldEnum :validator='validator' :value='value' v-else-if="type == 'enum'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
        :item-obj="item"
        :show-errors='showErrorsFlag'
        :scope="scope" 
    />
    <UncleFormFieldResource :validator='validator' :value='value' v-else-if="type == 'resource'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
        :item-obj="item"
        :show-errors='showErrorsFlag'
        :scope="scope" 
    />
    <UncleFormFieldResourceMany :validator='validator' :value='value' v-else-if="type == 'resource_many'" 
        @input='triggerInput($event)'
        :field-object="fieldObject"
        :item-obj="item"
        :show-errors='showErrorsFlag'
        :scope="scope" 
    />
    <UncleFormFieldPhone @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'phone'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldHidden @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'hidden'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldGeoAddress @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'geoaddress'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <UncleFormFieldDateRangeDistinct @input='triggerInput' :validator='validator' :value='value' v-else-if="type == 'date_range' && fieldObject.widget == 'distinct'" :field-object='fieldObject' :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
    <component :is="fieldObject.component" @input='triggerInput' :value='value'  v-else-if="type == 'custom'" :field-object="fieldObject" :item-obj="item" :show-errors='showErrorsFlag' :scope="scope" />
</template>


<script>
    import { FormFieldAbstractComponent } from 'uncle-vue';

    export default {
        extends: FormFieldAbstractComponent

    }
</script>