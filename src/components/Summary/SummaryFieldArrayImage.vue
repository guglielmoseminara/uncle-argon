<template>
   <div>
       <span v-for="(itemObj, index) in value" 
            :key="index" class="field-array-images"
            @click="openModal($event, index)"
        >
           <div v-for="(field, findex) in fieldObject.fields" :key="findex" >
               <UncleSummaryFieldAbstract 
                :field-object="field" 
                :type="field.type" 
                :value="getValue(itemObj, field.type, field.name)" />
           </div>
        </span>
        <UncleModal class="gallery-modal" 
            :has-close-btn="false" 
            :modal-object="modalObject" 
            :id="modalId"
        >
            <img class="gallery-img" :src="images[selectedImageIndex]"/>
            <div class="gallery-footer">
                <p class="preview">Anteprima</p>
                <div class="controls">
                    <i class="fas fa-chevron-right ml-3" @click="nextPhoto"></i>
                    <p class="counter">{{selectedImageIndex + 1}} / {{images.length}}</p>
                    <i class="fas fa-images ml-3"></i>
                    <i class="fas fa-chevron-left" @click="previousPhoto"></i>
                </div>
            </div>
        </UncleModal>
    </div>
</template>

<script>
    import { SummaryFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent,
        props: {
        },
        data() {
            return {
                modalObject: {
                    title: '',
                },
                modalId: 'modal'+Math.random().toString(36).substring(5),
                images: [],
                selectedImageIndex: 0
            }
        },
        mounted() {
            console.log(this.value);
            this.images = this.value.map( ele => {
                return ele.image;
            });
            console.log(this.images);
        },
        methods: {
            openModal(event, index) {
                this.selectedImageIndex = index;
                event.stopPropagation();
                event.stopImmediatePropagation();

                this.$modalProvider.open(this.modalId);
            },
            nextPhoto() {
            this.selectedImageIndex = ((this.selectedImageIndex+1)%this.images.length)
            },
            previousPhoto() {
            if(this.selectedImageIndex!==0) {
                this.selectedImageIndex = ((this.selectedImageIndex-1)%this.images.length)
            }
            }
        },
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

    .gallery-img {
        width: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
    .gallery-footer {
        position: absolute;
        padding:16px;
        bottom: 0;
        background: rgba(48, 44, 44, 0.89);
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #ffffff;
        .preview {
            margin-bottom: 0;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 10px;
            float: left;
        }

        .controls {
            max-width: 120px;
            margin: auto;
            i {
                display: inline-block;
                float: right;
                &.fa-chevron-right, &.fa-chevron-left {
                    cursor: pointer;
                }
            }
            p {
                float: right;
                &.counter {
                    margin-left: 10px;
                    margin-bottom: 0;
                    font-size: 12px;
                }
            }
        }
    }
</style>