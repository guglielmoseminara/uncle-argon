<template>
    <div>
        <base-checkbox @input='triggerInput' v-model='formValue' :name='fieldObject.name'>
        </base-checkbox>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>