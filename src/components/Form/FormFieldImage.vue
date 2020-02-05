<template>
        <div>
            <div v-if="files && hasGalleryVisible">
                <div class="gallery-container" v-for="(file, index) in files" :key="file.id">
                    <img :src="file.blob" class="gallery-img-preview" @click="openModal($event, index)">
                    <i class="fas fa-trash-alt align-middle px-3"
                        @click="deleteFile(index)"
                    ></i>
                </div>
            </div>
            <file-upload
                ref="upload"
                v-model="files"
                post-action="/post.method"
                :multiple="false"
                put-action="/put.method"
                @input-filter="inputFilter"
                input-id="fileupload"
                class="btn btn-icon btn-primary"
            >
                <slot name="content">
                    <template v-if="files.length > 0">
                        <i class="fas fa-edit align-middle"></i>
                        <span class="file-name">Modifica</span>
                    </template>
                    <template v-else>
                        <i class="fas fa-plus align-middle"></i>
                        <span class="file-name">Aggiungi</span>
                    </template>
                </slot>
            </file-upload>
            <!--<UncleModalGallery v-if="hasModalVisible" :id="modalId" :images = images :selected-index="selectedImageIndex"/>!-->
        </div>
</template>

<script>
    import { FormFieldImageComponent } from 'uncle-vue';

    export default {
        extends: FormFieldImageComponent,
        data() {
            return {
                selectedImageIndex: 0,
                modalId: 'GalleryModal',
            }
        },
        methods: {
            openModal(event, index) {
                if (this.hasModalVisible) {
                    this.selectedImageIndex = index;
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    this.$modalProvider.open(this.modalId);
                }
            }
        },
        computed: {
            images() {
                return this.files.length > 0 ? this.files.map((file) => {
                    return file.blob;
                }) : [];
            }
        }
    }
</script>
<style scoped lang="scss">

    .fa-trash-alt {
        cursor: pointer;
    }

    .gallery-img-preview {
        display: inline-block;
        width: 74px;
        height: 74px;
        object-fit: cover;
        border-radius: 4px;
    }

    .file-uploads::v-deep  {
        label {
            cursor: pointer;
        }
        input {
            height: 50px;
            width: 200px;
        }
        display: inline-block;
        align-items: center;
        padding-right: 10px;
        height: 43px;
        margin-top:20px;
        .file-name {
            overflow: hidden;
            white-space: nowrap;
        }
    }

</style>