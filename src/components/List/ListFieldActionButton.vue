<template>
    <UncleActionButton :action-obj="fieldObject.action" :text="fieldObject.actionText" :icon="fieldObject.icon" :color="fieldObject.color" :params="params"/>
</template>

<script>

    import { Utils } from 'uncle-vue';
    
    export default {
        props: {
            fieldObject: {
                type: Object,
                required: true
            },
            params: {
                type: Object,
                default: {}
            }
        }
    }
</script>