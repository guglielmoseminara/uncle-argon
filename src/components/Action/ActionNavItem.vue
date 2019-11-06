<template>
    <router-link :to="{ name: actionItemObject.action.route.name, params: params }">
        <slot></slot>
    </router-link>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>