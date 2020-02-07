<template>
    <span><a :href="value" target="_blank">{{getBaseName(value)}}</a></span>
</template>

<script>

    import { Utils } from 'uncle-vue';
    
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        },
        methods: {
            getBaseName(url) {
                return Utils.basename(url);
            }
        }
    }
</script>