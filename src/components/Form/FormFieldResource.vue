<template>
    <div>
        <select class="form-control" v-model="resourceValue" @change="triggerInput" :name='fieldObject.name'>
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