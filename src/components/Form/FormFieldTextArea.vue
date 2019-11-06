<template>
    <textarea class="form-control" rows="3" @input='triggerInput' v-model='formValue' v-validate="validator" :name='name'></textarea>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>