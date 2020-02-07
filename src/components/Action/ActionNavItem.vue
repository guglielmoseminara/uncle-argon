<template>
    <router-link :to="{ name: actionObject.route.name, params: params }">
        <slot></slot>
    </router-link>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>