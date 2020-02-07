<template>
    <div @click="$event.stopPropagation()">
        <base-dropdown>
            <base-button slot="title" type="secondary" outline icon="fas fa-ellipsis-v" >
            </base-button>
            <UncleActionDropdownItem v-for="(actionItem, aindex) in actionsList" :params="params" :key="aindex" :action-obj="actionItem.action" :color="actionItem.color" :text="actionItem.text" :icon="actionItem.icon" :confirm="actionItem.confirm" />
        </base-dropdown>
    </div>
</template>

<script>    
    import { ActionsListComponent } from 'uncle-vue';

    export default {
        extends: ActionsListComponent
    }
</script>