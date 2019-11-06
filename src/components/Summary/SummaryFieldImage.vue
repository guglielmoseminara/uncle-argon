

<template>
    <div>
        <img class="field-image" :src="value" @click="openModal()"/>
         <UncleModal class="gallery-modal" v-if="fieldObject.widget === 'preview'"
            :has-close-btn="false" 
            :modal-object="modalObj" 
            :id="id"
        >
            <img class="gallery-img" :src="value"/>
            <div class="gallery-footer">
                <p class="preview">Anteprima</p>
            </div>
        </UncleModal>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            fieldObject: {
                type: Object,
                required: true,
            }
        }, 
        data() {
            return {
                id: 'modal'+Math.random().toString(36).substring(5),
                modalObj: {
                    title: '',
                },
            }
        },
        methods: {
            openModal() {
                if(this.fieldObject.widget === 'preview') {
                    this.$modalProvider.open(this.id);
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    img.field-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

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
    }


</style>