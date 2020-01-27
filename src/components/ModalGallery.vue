<template>
    <UncleModal class="gallery-modal" 
        :has-close-btn="false" 
        :modal-obj="modalObject" 
    >
        <template slot="content">
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
        </template>
    </UncleModal>
</template>

<script>
    import { Modal } from 'uncle-vue';

    export default {
        props: {
            images: {
                type: Array,
                required: true
            },
            selectedIndex: {
                type: Number
            },
            id: {
                type: String
            }
        },
        data() {
            return {
                modalObject: null,
                modalId: this.id || 'ModalGallery',
            }
        },
        created() {
            var modalObject = new Modal();
            modalObject.name = this.modalId;
            modalObject.title = '';
            this.modalObject = modalObject;            
        },
        methods: {
            nextPhoto() {
                this.selectedIndex = ((this.selectedImageIndex+1) % this.images.length)
            },
            previousPhoto() {
                if(this.selectedImageIndex!==0) {
                    this.selectedIndex = ((this.selectedImageIndex-1) % this.images.length)
                }
            }
        },
        computed: {
            imagesList() {
                return this.images;
            },
            selectedImageIndex() {
                return this.selectedIndex || 0;
            }
        }
    }
</script>

<style scoped lang="scss">
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