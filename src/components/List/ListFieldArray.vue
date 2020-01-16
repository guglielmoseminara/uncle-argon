<template>
    <div>
        <template v-for="(itemObj, index) in value">
            <UncleListWidgetAbstract :item-obj="itemObj" :field-object="fieldObject" :value="value" :key="index">
            </UncleListWidgetAbstract>
        </template>
    </div>
</template>

<script>
    import { ListFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: ListFieldArrayComponent
    }
</script>