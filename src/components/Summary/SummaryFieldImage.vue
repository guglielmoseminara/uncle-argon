

<template>
    <div>
        <img class="field-image" :src="value" @click="openModal($event, 0)"/>
        <UncleModalGallery v-if="hasModalVisible" :id="modalId" :images = images :selected-index="selectedImageIndex"/>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },
            hasModal: {
                type: Boolean
            }
        },
        data() {
            return {
                selectedImageIndex: 0,
                modalId: 'GalleryModal',
            }
        },
        methods: {
            openModal(event, index) {
                if (this.hasModal) {
                    this.selectedImageIndex = index;
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    this.$modalProvider.open(this.modalId);
                }
            }
        },
        computed: {
            images() {
                return this.value ? [this.value] : [];
            },
            hasModalVisible() {
                return this.hasModal;
            }
        }
    }
</script>

<style scoped lang="scss">
    img.field-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
</style>