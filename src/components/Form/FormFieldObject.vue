<template>
    <div>
        <UncleFormFieldContainer v-for="(field, findex) in fieldsList" :key='findex' :text='field.text' v-bind:class="{ 'is-invalid': isErrorsVisible(getFieldName(field)) }" :field-object="field" v-show="!fieldObject.isHiddenCondition">
            <UncleFormFieldAbstract 
                :ref="getFieldName(field)" 
                @input="update(field.name, $event)" 
                v-validate.initial="field.validator" 
                :name="getFieldName(field)" 
                :data-vv-scope="scope"
                :scope="scope"
                :field-object="field"
                :value='formValue ? formValue[field.name] : null' 
                :type="field.type" 
                :data-vv-as="field.text"  
                :item-obj="item" 
                :show-errors="showErrorsFlag"
            />
            <span class="text-error" v-if="isErrorsVisible(getFieldName(field))">{{formErrors[getFieldName(field)].msg}}</span>
        </UncleFormFieldContainer>
    </div>
</template>

<script>
    import { FormFieldObjectComponent } from 'uncle-vue';

    export default {
        extends: FormFieldObjectComponent

    }
</script>