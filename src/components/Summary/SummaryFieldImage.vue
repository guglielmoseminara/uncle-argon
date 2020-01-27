

<template>
    <div>
        <img class="field-image" :src="value"/>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
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