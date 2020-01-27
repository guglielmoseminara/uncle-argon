<template>
    <base-input @input='triggerInput' v-model='formValue' :name='fieldObject.name' />
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>