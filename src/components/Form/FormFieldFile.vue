<template>
    <!-- <textarea class="form-control" rows="3" @input='triggerInput' v-model='files' v-validate="validator" :name='name'></textarea> -->
        <div>
            <div v-if="files">
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
            >
                <i class="fas fa-plus align-middle px-3"
                       
                    ></i>
                <span class="file-name"> {{ files[0] ? files[0].name : 'Aggiungi immagine'}}</span>
            </file-upload>
        </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';

    export default {
        extends: FormFieldComponent,
          data() {
                return {
                    files: []
                }
            },
        methods: {
            dataURItoBlob(dataURI) {
                var byteString;
                if (dataURI.split(',')[0].indexOf('base64') >= 0)
                    byteString = atob(dataURI.split(',')[1]);
                else
                    byteString = unescape(dataURI.split(',')[1]);

                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }

                return new Blob([ia], {type:mimeString});
            },
            initFile() {
                //TODO: implementare il caso di array di immagini dove formValue è un vettore
                var base_image = new Image();
                base_image.crossOrigin="anonymous";
                base_image.onload = function(){
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.width = base_image.width;
                    canvas.height = base_image.height;
                    context.drawImage(base_image, 0, 0);
                    var blob = this.dataURItoBlob(canvas.toDataURL());
                    this.files.push({
                    "url": this.formValue,
                    "blob": URL.createObjectURL(blob),
                    'file': blob
                    });
                }.bind(this);
                base_image.src = this.formValue;
            },
            inputFile: function (newFile, oldFile) {
                if (newFile && oldFile && !newFile.active && oldFile.active) {
                    // Get response data
                        console.log('response', newFile.response)
                    if (newFile.xhr) {
                    //  Get the response status code
                        console.log('status', newFile.xhr.status)
                    }
                }
            },
            /**
            * Pretreatment
            * @param  Object|undefined   newFile   Read and write
            * @param  Object|undefined   oldFile   Read only
            * @param  Function           prevent   Prevent changing
            * @return undefined
            */
            inputFilter: function (newFile, oldFile, prevent) {
                    if (newFile && !oldFile) {
                        // Filter non-image file
                            if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                            return prevent()
                        }
                }

                // Create a blob field
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file)
                }
            },
            deleteFile(index) {
                this.files.splice(index, 1);
            }

        },

        watch: {
            files: function () {

            },
            formValue: function (old, newVal) {
                this.initFile();
            },
        },
        mounted() {            
        
        },
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
        margin-top: 20px;
        width: 215px;
        border: 1px solid $input-border-color;
        border-radius: 4px;
        text-align: left;
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