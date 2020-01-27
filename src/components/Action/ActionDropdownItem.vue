<template>
    <li>
        <a class="dropdown-item" v-if="actionItemObject.action.type == 'sdk'" @click="execute()">
            <i v-show="hasIcon" :class="icon"/>
            {{actionItemObject.text}}
        </a>
        <UncleActionNavItem v-else-if="actionItemObject.action.type == 'nav'" :action-item-object='actionItemObject' :params-object='paramsObject'>
            <a class="dropdown-item">
                <i v-show="hasIcon" :class="icon"/>
                {{actionItemObject.text}}
            </a>
        </UncleActionNavItem>
        <a class="dropdown-item" v-else-if="actionItemObject.action.type == 'modal'" @click="$modalProvider.open(actionItemObject.action.getModal().name, paramsObject)">{{actionItemObject.text}}</a>
    </li>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>