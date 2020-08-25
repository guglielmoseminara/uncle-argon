<template>
        <div>
            <div v-if="file">
                <div class="gallery-container mb-4" >
                    <a :href="file.url" target="_blank">
                        <img width="50" src="https://www.clipartmax.com/png/middle/152-1529911_download-the-agenda-in-pdf-format-export-pdf-icon.png" class="gallery-img-preview">
                    </a>
                    <i class="fas fa-trash-alt align-middle px-3"
                        @click="deleteFile(index)"
                    ></i>
                </div>
            </div>
            <file-upload
                :ref="uploadRef"
                v-model="files"
                post-action="/post.method"
                :multiple="false"
                put-action="/put.method"
                @input-filter="inputFilter"
                :input-id="uploadInputId"
                class="btn btn-icon btn-primary"
            >
                <slot name="content">
                    <template v-if="file">
                        <i class="fas fa-edit align-middle"></i>
                        <span class="file-name">Modifica</span>
                    </template>
                    <template v-else>
                        <i class="fas fa-plus align-middle"></i>
                        <span class="file-name">Aggiungi</span>
                    </template>
                </slot>
            </file-upload>
        </div>
</template>

<script>
    import { FormFieldFileComponent } from 'uncle-vue';

    export default {
        extends: FormFieldFileComponent,
        data() {
            return {
                uploadRef: 'upload'+this._uid,
                uploadInputId: 'fileupload'+this._uid,
            }
        }
    }
</script>
<style scoped lang="scss">

    .fa-trash-alt {
        cursor: pointer;
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
        .file-name {
            overflow: hidden;
            white-space: nowrap;
        }
    }

</style>