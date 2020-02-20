<template>
    <div class="date-range__container">
        <div class="date-range__text">
            <label class="label">
                Dal
            </label>
            <flat-pickr class="form-control" v-if="fieldsRange && fieldsRange.length > 0" v-model="formValue[fieldsRange[0].name]" @on-change="update($event)"></flat-pickr>
        </div>
        <div class="date-range__text">
            <label class="label">
                Al
            </label>
            <flat-pickr class="form-control" v-if="fieldsRange && fieldsRange.length > 0" v-model="formValue[fieldsRange[0].name]" @on-change="update($event)"></flat-pickr>
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
        }
    }
</script>

<style scoped lang="scss">
    .date-range__container {
        display: flex;
        .date-range__text {
            width:50%;
            .form-control {
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