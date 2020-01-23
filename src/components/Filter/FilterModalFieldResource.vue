<template>
    <div>
        <select class="form-control" v-model="filterValue" @change="triggerInput">
            <option>Nessuno</option>
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