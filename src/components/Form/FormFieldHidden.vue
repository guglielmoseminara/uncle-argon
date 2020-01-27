<template>
    <div>
        <input type="hidden" @update='triggerInput' v-model='formValue' :name='fieldObject.name'/>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent
    }
</script>