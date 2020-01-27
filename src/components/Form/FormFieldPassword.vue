<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <i :class="getIcon()"></i>
            </span>
        </div>
        <input @input='triggerInput' v-model='formValue' :name='fieldObject.name' class="form-control" type="password" :placeholder="fieldObject.placeholder">
    </div>
</template>

<script>
    import { FormFieldTextComponent } from 'uncle-vue';

    export default {
        extends: FormFieldTextComponent
    }
</script>