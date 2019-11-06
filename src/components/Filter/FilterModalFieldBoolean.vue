<template>
    <div>
        <label>{{text}}</label>
        <base-checkbox label="text" class="form-control mb-3" @input="triggerInput" v-model="filterValue">
        </base-checkbox>
    </div>
</template>

<script>
    import { FilterFieldComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldComponent
    }
</script>

<style scoped lang="scss">
    .custom-checkbox {
        border: none !important;
    }
</style>