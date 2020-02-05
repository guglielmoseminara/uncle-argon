<template>
    <div>
        <flat-pickr v-model="date1"></flat-pickr>
        <flat-pickr v-model="date2"></flat-pickr>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent,
        data(){
            return {
                date1: null,
                date2: null,
            }
        }
    }
</script>