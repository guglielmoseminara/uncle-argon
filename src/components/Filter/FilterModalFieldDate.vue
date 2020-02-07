<template>
    <div>
        <flat-pickr class="form-control" @input="triggerInput" v-model="filterValue"></flat-pickr>
    </div>
</template>

<script>
    import { FilterFieldComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldComponent
    }
</script>