<template>
    <div>
        <base-input @input='triggerInput' v-model='formValue' :name='fieldObject.name' :placeholder="fieldObject.placeholder" :addon-left-icon="getIcon()" :disabled="fieldObject.disabled"/>
    </div>
</template>

<script>
    import { FormFieldTextComponent } from 'uncle-vue';

    export default {
        extends: FormFieldTextComponent
    }
</script>