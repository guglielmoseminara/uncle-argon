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
                <UncleSummaryLabelAbstract v-if="labelObject" :type="labelObject.type" :label-object="labelObject" :value="getValue(itemObj, labelObject.field)"/>
                <span v-else>{{field.text}}</span>
                <p>
                    <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(itemObj, field)" />
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
        },
        created() {
            this.labelObject = this.fieldObject.getLabel();
        }
    }
</script>

<style scoped lang="scss">
</style>