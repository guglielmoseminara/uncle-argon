<template>
    <div>
        <base-input @input='triggerInput' v-model='formValue' v-validate="validator" :name='fieldObject.name' :placeholder="fieldObject.placeholder" :addon-left-icon="getIcon()"/>
    </div>
</template>

<script>
    import { FormFieldTextComponent } from 'uncle-vue';

    export default {
        extends: FormFieldTextComponent
    }
</script>