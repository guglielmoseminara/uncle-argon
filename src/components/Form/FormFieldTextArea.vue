<template>
    <div>
        <textarea class="form-control" rows="3" @input='triggerInput' v-model='formValue' :name='fieldObject.name'></textarea>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>