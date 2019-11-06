<template>
    <base-input @input='triggerInput' v-model='formValue' />
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>