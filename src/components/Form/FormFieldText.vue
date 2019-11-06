<template>
    <div>
        <base-input @input='triggerInput' v-model='formValue' v-validate="validator" :name='name'/>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>