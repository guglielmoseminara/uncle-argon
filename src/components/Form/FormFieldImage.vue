<template>
    <!-- <textarea class="form-control" rows="3" @input='triggerInput' v-model='files' v-validate="validator" :name='name'></textarea> -->
        <div>
            <div v-if="files && hasGalleryVisible">
                <div class="gallery-container" v-for="(file, index) in files" :key="file.id">
                    <img :src="file.blob" class="gallery-img-preview">
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
                @input-file="inputFile"
                @input-filter="inputFilter"
                input-id="fileupload"
                class="btn btn-icon btn-primary"
            >
                <slot name="content">
                    <i class="fas fa-plus align-middle"></i>
                    <span class="file-name"> {{ files[0] ? files[0].name : 'Aggiungi'}}</span>
                </slot>
            </file-upload>
        </div>
</template>

<script>
    import { FormFieldImageComponent } from 'uncle-vue';

    export default {
        extends: FormFieldImageComponent
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
        display: flex;
        align-items: center;
        padding-right: 10px;
        height: 43px;
        .file-name {
            overflow: hidden;
            white-space: nowrap;
        }
    }

</style>