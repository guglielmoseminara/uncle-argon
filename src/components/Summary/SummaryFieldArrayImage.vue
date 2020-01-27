<template>
   <div>
       <span v-for="(itemObj, index) in value" 
            :key="index" class="field-array-images"
            @click="openModal($event, index)"
        >
            <slot name="content" :item="itemObj">
                <template v-if="fieldObject">
                    <div v-for="(field, findex) in fieldObject.fields" :key="findex">
                        <UncleSummaryFieldAbstract 
                            :field-object="field" 
                            :type="field.type" 
                            :value="getValue(itemObj, field)" />
                    </div>
                </template>
            </slot>
        </span>
        <UncleModalGallery :id="modalId" :images = images :selected-index="selectedImageIndex"/>
    </div>
</template>

<script>
    import { SummaryFieldArrayComponent, Modal } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent,
        data() {
            return {
                selectedImageIndex: 0,
                modalId: 'GalleryModal',
            }
        },
        methods: {
            openModal(event, index) {
                this.selectedImageIndex = index;
                event.stopPropagation();
                event.stopImmediatePropagation();
                this.$modalProvider.open(this.modalId);
            }
        },
        computed: {
            images() {
                return this.value ? this.value.map( ele => {
                    return ele.image;
                }) : [];
            }
        }
    }
</script>

<style scoped lang="scss">
    .field-array-images {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid $border-color;
        .field-text {
            border: none;
        }
    }
</style>