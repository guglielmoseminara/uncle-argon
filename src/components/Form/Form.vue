<template>
    <div class="cols-layout-container form">
        <p slot="actions" v-show='actionsList && actionsList.length > 0'>
            <UncleActionSubmit @click="actionClick" v-for='(actionItem, aindex) in actionsList' :key='aindex' :action-item-object='actionItem' :params-object='formValue'>{{actionItem.text}}</UncleActionSubmit>
        </p>
        <template v-if="groupsList.length > 0">
            <UncleFormGroup class="group col-layout-6" v-for="(group, gindex) in groupsList" :key='gindex' :text='group.text'>
                <UncleFormFieldContainer v-for="(field, findex) in group.getFields()" :key='findex' :text='field.text'>
                    <UncleFormFieldAbstract :name="field.name" :validator='field.validator' :field-object="field"
                        :value='formValue[field.name]' :type="field.type"
                    />
                    <span v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
                </UncleFormFieldContainer>
            </UncleFormGroup>
        </template>
        <template v-else>
            <UncleFormFieldContainer v-for="(field, findex) in fieldsList" :key='findex' :text='field.text'>
                <UncleFormFieldAbstract @input="formUpdate(field, $event)" :field-object="field"
                    :name="field.name" :validator='field.validator' :value='formValue[field.name]' :type="field.type"/>
                <span v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
            </UncleFormFieldContainer>
        </template>
        <slot :formValue="formValue"></slot>
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