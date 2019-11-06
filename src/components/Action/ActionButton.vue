<template>
    <base-button v-if="actionItemObject.action.type == 'sdk'" :icon='icon || null' @click="execute()" :type="actionItemObject.color || 'primary'">{{actionItemObject.text}}</base-button>
    <UncleActionNavItem v-else-if="actionItemObject.action.type == 'nav'" :action-item-object='actionItemObject' :params-object='paramsObject'>
        <base-button :icon='icon || null' :type="actionItemObject.color || 'primary'">{{actionItemObject.text}}</base-button>
    </UncleActionNavItem>
    <UncleActionModalItem v-else-if="actionItemObject.action.type == 'modal'" :action-item-object='actionItemObject' :params-object='paramsObject' />
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>