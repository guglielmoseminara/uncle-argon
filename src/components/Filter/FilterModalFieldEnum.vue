<template>
    <div>
        <select class="form-control" v-model="filterValue" @change="triggerInput">
            <option>Nessuno</option>
            <option v-for="(option, oindex) in fieldObject.getOptions()" :key="oindex" :value="option.name">{{option.text}}</option>
        </select>
    </div>
</template>

<script>
    import { FilterFieldComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldComponent
    }
</script>