<template>
    <div>
        {{text}}
        <select  class="form-control form-group" v-model="filterValue" @change="triggerInput">
            <option v-for="(option, oindex) in itemsList" :key=oindex :value="option[fieldObject.item.valueField]">{{getOptionText(option, fieldObject.item.textField)}}</option>
        </select>
    </div>
</template>

<script>
    import { FilterFieldResourceComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldResourceComponent
    }
</script>