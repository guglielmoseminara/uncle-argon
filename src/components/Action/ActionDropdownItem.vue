<template>
    <li>
        <a class="dropdown-item" v-if="actionObject.type == 'sdk'" @click="execute()">
            <i v-show="hasIcon" :class="icon"/>
            {{text}}
        </a>
        <UncleActionNavItem v-else-if="actionObject.type == 'nav'" :action-obj='actionObject' :params='params'>
            <a class="dropdown-item">
                <i v-show="hasIcon" :class="icon"/>
                {{text}}
            </a>
        </UncleActionNavItem>
        <a class="dropdown-item" v-else-if="actionObject.type == 'modal'" @click="$modalProvider.open(actionObject.getModal().name, params)">{{text}}</a>
    </li>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>