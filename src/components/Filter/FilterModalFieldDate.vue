<template>
    <div>
        <flat-pickr class="form-control" @input="triggerInput" v-model="filterValue" :config="config"></flat-pickr>
    </div>
</template>

<script>
    import { FilterFieldComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldComponent,
        data () {
            return {
                config: this.$configurationProvider.getDatePickerConfig(),                
            }
        }
    }
</script>