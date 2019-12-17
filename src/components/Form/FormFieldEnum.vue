<template>
    <select  class="form-control form-group" v-model="selectValue" @change="triggerInput" v-validate="validator" :name='fieldObject.name'>
        <option v-for="(option, oindex) in fieldObject.getOptions()" :key="oindex" 
            :value="option.name"
        >
            {{option.text}}
        </option>
    </select>
</template>

<script>
    import { FormFieldEnumComponent } from 'uncle-vue';

    export default {
        extends: FormFieldEnumComponent,
    }
</script>