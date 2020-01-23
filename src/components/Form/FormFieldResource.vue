<template>
    <div>
        <select  class="form-control form-group" v-model="formValue" @change="triggerInput" v-validate="validator" :name='fieldObject.name'>
            <option v-for="(option, oindex) in itemsList" :key=oindex :value="option[fieldObject.item.valueField]">{{getOptionText(option, fieldObject.item.textField)}}</option>
        </select>
    </div>
</template>

<script>
    import { FormFieldResourceComponent } from 'uncle-vue';

    export default {
        extends: FormFieldResourceComponent
    }
</script>