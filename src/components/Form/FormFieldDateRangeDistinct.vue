<template>
    <div class="date-range__container">
        <div class="date-range__text">
            <label class="label">
                Dal
            </label>
            <flat-pickr class="form-control" v-model="formValue[firstField]" @on-change="update($event, 0)" :disabled="fieldObject.disabled"></flat-pickr>
        </div>
        <div class="date-range__text">
            <label class="label">
                Al
            </label>
            <flat-pickr class="form-control" v-model="formValue[secondField]" @on-change="update($event, 1)" :disabled="fieldObject.disabled"></flat-pickr>
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