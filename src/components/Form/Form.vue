<template>
    <div class="form" :data-vv-scope="formObject.name">
        <template v-for="(elementObject, tindex) in formObject.parse()">
            <p v-if="elementObject.tagName === 'actions'" slot="actions" :key='tindex' v-show='actionsList && actionsList.length > 0'>
                <slot name="actions">
                    <UncleActionSubmit @click=actionClick v-for='(actionItem, aindex) in actionsList' :key='aindex' :action-obj="actionItem.action" :color="actionItem.color" :text="actionItem.text" :icon="actionItem.icon" :validate="actionItem.validate" :confirm="actionItem.confirm" :form="formObject.name" :params='formDataValue'>{{actionItem.text}}</UncleActionSubmit>
                </slot>
            </p>
            <div v-if="elementObject.tagName === 'fields' || elementObject.tagName === 'groups'" :key='tindex'>
                <template v-if="elementObject.tagName == 'groups'">
                    <vue-grid align="stretch" justify="start">
                        <vue-cell :width="getGroupWidht(group)" v-for="(group, gindex) in groupsList" :key="gindex">
                            <UncleFormGroup :id="'group_'+group.name" class="group" :text='group.text'>
                                <template slot="header">
                                    <p class="title"> {{group.text}} </p>   
                                </template>
                                <UncleFormFieldContainer v-for="(field, findex) in group.getFields()" :key='findex' :text='field.text' v-bind:class="{ 'is-invalid': (submitted && formErrors[field.name]) }">
                                    <UncleFormFieldAbstract @input="formUpdate(field, $event)" v-validate.initial="field.validator" :name='field.name' :data-vv-scope="formObject.name" :field-object="field"
                                    :value='formValue[field.name]' :type="field.type" :data-vv-as="field.text"
                                    />
                                    <span class="text-error" v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
                                </UncleFormFieldContainer>
                            </UncleFormGroup>
                        </vue-cell>
                    </vue-grid>
                </template>
                <template v-else-if="elementObject.tagName == 'fields'">
                    <UncleFormFieldContainer v-for="(field, findex) in elementObject.element" :key='findex' :text='field.text' v-bind:class="{ 'is-invalid': (submitted && formErrors[field.name]) }">
                        <UncleFormFieldAbstract @input="formUpdate(field, $event)" :field-object="field"
                            v-validate.initial="field.validator" :name='field.name' :data-vv-scope="formObject.name" :value='formValue[field.name]' :type="field.type" :data-vv-as="field.text"/>
                        <span class="text-error" v-if='submitted && formErrors[field.name]'>{{formErrors[field.name].msg}}</span>
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
            async validateAndSubmit() {
                this.actionClick();
                await this.validate();
                return this.filteredErrors;
            },
            async triggerSubmit() {
                var filteredErrors = await this.validateAndSubmit();
                if (filteredErrors.length == 0) {
                    await this.submit();
                    this.submitted = false;
                }
            },
            async validate() {
                return await this.$validator.validateAll(this.formObject.name);
            },
            getGroupWidht(group) {
                if (group.layout == 'full') {
                    return '12of12';
                } else {
                    return '6of12';
                }
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
                var filteredErrors = this.filteredErrors;
                for(let e in filteredErrors) {
                    let formItem = filteredErrors[e];
                    errors[formItem.field] = formItem;
                }
                return errors;
            },
            filteredErrors() {
                return this.$validator.errors.items.filter((item) => {
                    return item.scope == this.formObject.name
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-group {
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    ::v-deep .is-invalid input, ::v-deep .is-invalid select, ::v-deep .is-invalid .ti-input, ::v-deep .is-invalid textarea{
        border: 1px solid var(--danger);
    }
    ::v-deep .form-group:not(.is-invalid) input:not(.ti-new-tag-input), ::v-deep .form-group:not(.is-invalid) select, ::v-deep .form-group:not(.is-invalid) textarea, ::v-deep .form-group:not(.is-invalid) .ti-input {
        border: 1px solid #cad1d7;
    }

    ::v-deep .is-invalid .input-group-prepend .input-group-text{
        border: 1px solid var(--danger);
    }
    
    ::v-deep .is-invalid .ti-input input {
        border:none;
    }
    .text-error {
        color: var(--danger);
        font-size: 0.875rem;
        margin-top: 10px;
    }
</style>