<template>
    <div>
        <textarea class="form-control" rows="3" @input='triggerInput' v-model='formValue' :name='fieldObject.name' :disabled="fieldObject.disabled"></textarea>
    </div>
</template>

<script>
    import { FormFieldTextComponent } from 'uncle-vue';

    export default {
        extends: FormFieldTextComponent
    }
</script>