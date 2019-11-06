<template>
        <UncleSummaryFieldArrayChiplist 
            v-if="fieldObject.widget == 'chip-list'"
            :item-obj="itemObj" :field-object="fieldObject" :value="value">
        </UncleSummaryFieldArrayChiplist>

        <!-- <UncleSummaryFieldArrayImage
            v-else-if="fieldObject.widget == 'gallery'"
            :item-obj="itemObj" :field-object="fieldObject" :value="value">
        </UncleSummaryFieldArrayImage> -->

        <div v-else>
            <span v-for="(field, findex) in fieldsList" :key="findex">
                    {{field.text}}
                <p>
                    <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(itemObj, field.type, field.name)" />
                </p>
            </span>
        </div>
</template>

<script>
    import { SummaryFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent,
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