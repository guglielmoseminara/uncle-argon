<template>
    <form class="form" :data-vv-scope="formObject.name" v-on:submit.prevent="triggerSubmit">
        <template v-for="(elementObject, tindex) in formObject.parse()">
            <p class="actions__container d-flex" v-if="elementObject.tagName === 'actions'" slot="actions" :key='tindex' v-show='actionsList && actionsList.length > 0'>
                <slot name="actions">
                    <UncleButton
                        :type="submitActionItem.color"
                        :icon="submitActionItem.icon"
                        :loading="isLoading()"
                        @click="triggerSubmit"
                    >
                        {{submitActionItem.text}}
                    </UncleButton>
                    <template v-for='(actionItem, aindex) in actionsList'>
                        <UncleActionButton v-if="!actionItem.submit"
                            :key='aindex'
                            :action-obj="actionItem.action"
                            :color="actionItem.color" 
                            :text="actionItem.text" 
                            :icon="actionItem.icon"
                            :confirm="actionItem.confirm"
                            :params='formValue'
                        >
                            {{actionItem.text}}
                        </UncleActionButton>
                    </template>              
                </slot>
            </p>
            <div class="d-lg-flex justify-content-lg-between flex-wrap fields__container" v-if="elementObject.tagName === 'fields' || elementObject.tagName === 'groups'" :key='tindex'>
                <template v-if="elementObject.tagName == 'groups'">
                    <div 
                        class="pl-0 pr-0 col-12 fields-container__column mb-4" 
                        v-bind:class="getGroupWidht(group)" 
                        v-for="(group, gindex) in groupsList" :key="gindex"
                        v-show="isGroupVisible(group)"
                    >
                        <UncleFormGroup 
                            :id="'group_'+group.name" 
                            class="group" 
                            :text='group.text' 
                        >
                            <template slot="header">
                                <p class="title"> {{group.text}} </p>   
                            </template>
                            <UncleFormFieldContainer v-for="(field, findex) in group.getFields()" :key='findex' :text='field.text' v-bind:class="{ 'is-invalid': isErrorsVisible(field) }" :field-object="field">
                                <UncleFormFieldAbstract 
                                    :ref="getFieldName(field)" 
                                    @input="formUpdate(field, $event)" 
                                    v-validate.initial="field.validator" 
                                    :name="getFieldName(field)" 
                                    :data-vv-scope="getScope()"
                                    :scope="getScope()"
                                    :field-object="field"
                                    :value='formValue[field.name]' 
                                    :type="field.type" 
                                    :data-vv-as="field.text"  
                                    :item-obj="item" 
                                    :show-errors="isSubmitted() && isValidated()"
                                />
                                <span class="text-error" v-if="isErrorsVisible(field)">{{formErrors[getFieldName(field)].msg}}</span>
                            </UncleFormFieldContainer>
                        </UncleFormGroup>
                    </div>
                </template>
                <template v-else-if="elementObject.tagName == 'fields'">
                    <div class="pl-0 pr-0 col-12">
                        <UncleFormFieldContainer v-for="(field, findex) in elementObject.element" :key='findex' :text='field.text' v-bind:class="{ 'is-invalid': isErrorsVisible(field) }" :field-object="field">
                            <UncleFormFieldAbstract 
                                @input="formUpdate(field, $event)" 
                                :field-object="field"
                                v-validate.initial="field.validator" 
                                :name='getFieldName(field)' 
                                :data-vv-scope="getScope()"
                                :scope="getScope()"
                                :value='formValue[field.name]' 
                                :type="field.type" 
                                :data-vv-as="field.text" 
                                :ref="getFieldName(field)" 
                                :item-obj="item"
                                :show-errors="isSubmitted() && isValidated()"/>
                            <span class="text-error" v-if='isErrorsVisible(field)'>{{formErrors[getFieldName(field)].msg}}</span>
                        </UncleFormFieldContainer>
                    </div>
                </template>
                <slot :formValue="formValue" :formErrors="formErrors"></slot>
            </div>
        </template>
    </form>
</template>

<script>
    import { FormComponent } from 'uncle-vue';

    export default {
        extends: FormComponent,
        created() {
            this.$on('input', async () => {
                await this.buildErrors();
                this.$forceUpdate();
            });
        },
        methods: {
            async validateForm() {
                this.startSubmit();
                this.startValidate();
                await this.buildErrors();
                this.$forceUpdate();
                this.scrollToErrors();
            },
            async triggerSubmit() {
                this.startLoading();
                await this.validateForm();
                if (!this.hasFormErrors()) {
                    await this.submit();
                    this.stopSubmit();
                }
                this.stopLoading();
            },
            async buildErrors() {
                this.resetFormErrors();
                await this.validate();
                await this.$validator.validateAll(this.getScope());
                const veeErrors = this.$validator.errors.items.filter((item) => {
                    return item.scope == this.getScope()
                });
                for(let e in veeErrors) {
                    let formItem = veeErrors[e];
                    this.formErrors[formItem.field] = formItem;
                }
            },
            getGroupWidht(group) {
                return {
                    'col-lg-12': group.layout == 'full', 
                    'col-lg-6': group.layout != 'full'
                }
            },
            focus() {
                this.$refs[this.getFieldName(this.getFirstFocusableField())][0].$el.querySelector('.form-control').focus();
            },
            scrollToErrors() {
                this.$nextTick(() => {
                    const isInvalids = this.$el.querySelectorAll('.is-invalid, .is-invalid-content');
                    if (isInvalids.length > 0) {
                        isInvalids[0].scrollIntoView();
                    }
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
    ::v-deep .form-group:not(.is-invalid) input:not(.ti-new-tag-input), ::v-deep .form-group:not(.is-invalid) > select, ::v-deep .form-group:not(.is-invalid) > textarea, ::v-deep .form-group:not(.is-invalid) > .ti-input {
        border: 1px solid #cad1d7;
    }
    ::v-deep .is-invalid input:not(.ti-new-tag-input), ::v-deep .is-invalid select, ::v-deep .is-invalid .ti-input, ::v-deep .is-invalid textarea{
        border: 1px solid var(--danger) !important;
    }

    ::v-deep .is-invalid .input-group-prepend .input-group-text{
        border: 1px solid var(--danger);
    }
    
    ::v-deep .is-invalid .ti-input input {
        border:none;
    }

    ::v-deep .form-control:focus, ::v-deep .form-control:focus-within {
        border: 1px solid $primary !important;
    }

    ::v-deep .text-error {
        color: var(--danger);
        font-size: 0.875rem;
        margin-top: 10px;
    }

    ::v-deep .input-group-prepend + input{
        padding-left: 10px !important;
    }

    .form {
        .group {
            margin-right:20px;
            @media (max-width: 992px){ 
                margin-right: 0;
                margin-bottom: 20px;
            }
            .title {
                @extend .h3;
                font-weight: bold;
                margin-bottom: 0;
                color: $color-text-medium;
            }
        }

        .field {
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            .label {
                color: $color-text-light;
                margin-bottom: 8px;
                font-size: $text-small;
            }

        }
    }
</style>