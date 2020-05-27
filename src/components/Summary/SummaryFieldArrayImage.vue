<template>
   <div>
       <span v-for="(itemObj, index) in value" 
            :key="index" class="field-array-images"
            @click="openModal($event, index)"
        >
            <slot name="content" :item="itemObj" :index="index">
                <template v-if="fieldObject">
                    <UncleSummaryFieldImage 
                        :value="getValue(itemObj, fieldObject.fields[0])" 
                        :field-object="fieldObject.fields[0]" 
                        :has-modal=false 
                    />
                    <div class="field-text">
                        <span v-if="fieldObject.fields[1] && getValue(itemObj, fieldObject.fields[1])">
                            {{getValue(itemObj, fieldObject.fields[1])}}
                        </span>
                        <span v-else>
                            {{basename(getValue(itemObj, fieldObject.fields[0]))}}
                        </span>
                    </div>
                </template>
            </slot>
        </span>
        <UncleModalGallery :id="modalId" :images = images :selected-index="selectedImageIndex"/>
    </div>
</template>

<script>
    import { SummaryFieldArrayComponent, Utils } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent,
        data() {
            return {
                selectedImageIndex: 0,
                modalId: 'GalleryModal_'+this._uid,
            }
        },
        methods: {
            openModal(event, index) {
                this.selectedImageIndex = index;
                event.stopPropagation();
                event.stopImmediatePropagation();
                this.$modalProvider.open(this.modalId);
            },
            basename(url) {
                return Utils.basename(url);
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
        cursor: pointer;
        .field-text {
            color: $color-text-dark;
            font-weight: 500;
            font-size: $text-small;
            border: 1px solid $border-color;
            display: block;
            padding: 14px;
            border-radius: 4px;
            min-height: 50px;
            border:none;
        }
    }
</style>