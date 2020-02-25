<template>
    <li>
        <div class="dropdown-item" v-if="actionObject.type == 'sdk' || actionObject.type == 'service'" @click="execute()">
            <i v-show="hasIcon" :class="icon"/>
            {{text}}
        </div>
        <UncleActionNavItem v-else-if="actionObject.type == 'nav'" :action-obj='actionObject' :params='params'>
            <div class="dropdown-item">
                <i v-show="hasIcon" :class="icon"/>
                {{text}}
            </div>
        </UncleActionNavItem>
        <div class="dropdown-item" v-else-if="actionObject.type == 'modal'" @click="$modalProvider.open(actionObject.getModal().name, params)">{{text}}</div>
    </li>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent
    }
</script>