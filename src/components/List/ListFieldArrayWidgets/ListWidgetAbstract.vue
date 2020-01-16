<template>
        <UncleListFieldArrayChiplist 
            v-if="fieldObject.widget == 'chip-list'"
            :item-obj="itemObj" :field-object="fieldObject" :value="value">
        </UncleListFieldArrayChiplist>

        <span v-else>
            <span v-for="(field, findex) in fieldsList" :key="findex">
                <p>
                    <UncleListFieldAbstract :field-object="field" :type="field.type" :value="getValue(itemObj, field)" />
                </p>
            </span>
        </span>
</template>

<script>
    import { ListFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: ListFieldArrayComponent,
        props: {
            itemObj: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped lang="scss">
</style>