<template>
    <base-button v-if="actionObject.type == 'sdk'" :icon='computedIcon' @click="$event.stopPropagation(); execute()" :type="color || 'primary'">{{text}}</base-button>
    <UncleActionNavItem v-else-if="actionObject.type == 'nav'" :action-obj='actionObject' :params='params'>
        <base-button :icon='computedIcon' :type="color || 'primary'">{{text}}</base-button>
    </UncleActionNavItem>
    <UncleActionModalItem v-else-if="actionObject.type == 'modal'" :text='text' :params='params' />
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>