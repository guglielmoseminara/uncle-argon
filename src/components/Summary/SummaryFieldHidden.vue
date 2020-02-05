<template>
    <div>
        <input type="hidden" v-model='value' :name='fieldObject.name'/>
    </div>
</template>

<script>
    import { SummaryFieldComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldComponent
    }
</script>