<template>
    <div>
        <base-checkbox @input='triggerInput' v-model='formValue' v-validate="validator" :name='fieldObject.name'>
        </base-checkbox>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>