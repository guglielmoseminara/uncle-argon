<template>
    <div class="form">
        <template v-for="(elementObject, tindex) in formObject.parse()">
            <p v-if="elementObject.tagName === 'actions'" slot="actions" :key='tindex' v-show='actionsList && actionsList.length > 0'>
                <UncleActionSubmit @click="actionClick" v-for='(actionItem, aindex) in actionsList' :key='aindex' :action-item-object='actionItem' :params-object='formDataValue'>{{actionItem.text}}</UncleActionSubmit>
            </p>
            <div v-if="elementObject.tagName === 'fields' || elementObject.tagName === 'group'" :key='tindex'>
                <template v-if="elementObject.tagName == 'group'">
                    <UncleFormGroup class="group col-layout-6" :text='elementObject.element.text'>
                        <UncleFormFieldContainer v-for="(field, findex) in elementObject.element.getFields()" :key='findex' :text='field.text'>
                            <UncleFormFieldAbstract @input="formUpdate(field, $event)" :validator='field.validator' :field-object="field"
                                :value='formValue[field.name]' :type="field.type"
                            />
                            <span v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
                        </UncleFormFieldContainer>
                    </UncleFormGroup>
                </template>
                <template v-else-if="elementObject.tagName == 'fields'">
                    <UncleFormFieldContainer v-for="(field, findex) in elementObject.element" :key='findex' :text='field.text'>
                        <UncleFormFieldAbstract @input="formUpdate(field, $event)" :field-object="field"
                            :validator='field.validator' :value='formValue[field.name]' :type="field.type"/>
                        <span v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
                    </UncleFormFieldContainer>
                </template>
                <slot :formValue="formValue" :formErrors="formErrors"></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import { FormComponent } from 'uncle-vue';

    export default {
        extends: FormComponent,
        methods: {
            actionClick() {
                this.submitted = true;
            },
            validate() {
                return this.$validator.validateAll();
            }
        },
        data() {
            return {
                submitted: false,
            }
        },
        computed: {
            formErrors() {
                var errors = {};
                for(let e in this.$validator.errors.items) {
                    let formItem = this.$validator.errors.items[e];
                    errors[formItem.field] = formItem;
                }
                return errors;
            }
        }
    }
</script>

<style>
    .form-group {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
</style>