<template>
    <div class="list-array-field__container">
        <UncleListWidgetAbstract :field-object="fieldObject" :value="value">
        </UncleListWidgetAbstract>
    </div>
</template>

<script>
    import { ListFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: ListFieldArrayComponent
    }
</script>

<style scoped lang="scss">
    .array-chips {
        margin-right: 5px;
    }
</style>