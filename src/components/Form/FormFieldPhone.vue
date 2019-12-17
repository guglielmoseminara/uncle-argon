<template>
    <base-input @input='triggerInput' v-model='formValue' v-validate="validator" :name='fieldObject.name'/>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>