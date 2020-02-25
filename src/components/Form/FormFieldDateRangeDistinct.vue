<template>
    <div class="date-range__container">
        <div class="date-range__text" 
            v-bind:class="{ 'is-invalid': isErrorsVisible(getFieldName(fieldsRange[0])) }">
            <label class="label">
                Dal
            </label>
            <flat-pickr class="form-control" 
                v-model="formValue[firstField]" 
                @input="update($event, 0)"
                :name="getFieldName(fieldsRange[0])"
                :disabled="fieldObject.disabled" 
                v-validate.initial="fieldsRange[0].validator" 
                :data-vv-scope="scope"
                :scope="scope"
                :config="config"
                data-vv-as="Dal"
            ></flat-pickr>
            <span class="text-error" v-if="isErrorsVisible(getFieldName(fieldsRange[0]))">
                {{formErrors[getFieldName(fieldsRange[0])].msg}}
            </span>
        </div>
        <div class="date-range__text"
            v-bind:class="{ 'is-invalid': isErrorsVisible(getFieldName(fieldsRange[0])) }">
            <label class="label">
                Al
            </label>
            <flat-pickr class="form-control" 
                v-model="formValue[secondField]" 
                @input="update($event, 1)" 
                :disabled="fieldObject.disabled" 
                :config="config"
                :name="getFieldName(fieldsRange[1])"
                v-validate.initial="fieldsRange[1].validator" 
                :data-vv-scope="scope"
                :scope="scope"
                data-vv-as="Al"
            ></flat-pickr>
            <span class="text-error" v-if="isErrorsVisible(getFieldName(fieldsRange[1]))">
                {{formErrors[getFieldName(fieldsRange[1])].msg}}
            </span>
        </div>
    </div>
</template>

<script>
    import { FormFieldDateRangeComponent } from 'uncle-vue';

    export default {
        extends: FormFieldDateRangeComponent,
        methods: {
            update(value, index) {
                this.triggerInput();
            }
        },
        computed: {
            firstField() {
                return this.fieldsRange[0].name;
            },
            secondField() {
                return this.fieldsRange[1].name;
            }
        },
        data () {
            return {
                config: this.$configurationProvider.getDatePickerConfig(),                
            }
        }
    }
</script>

<style scoped lang="scss">
    .date-range__container {
        display: flex;
        .date-range__text {
            width:50%;
            .form-control:not([disabled]) {
                padding: 14px;
                background-color:white;
            }
            .label {
                color:$primary;
            }
            &:first-child {
                margin-right: 20px;
            }
        }
    }
</style>