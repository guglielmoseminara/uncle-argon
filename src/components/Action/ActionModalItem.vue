<template>
    <span>
        <base-button type="primary" :icon='icon' @click="modals[modal.name] = true">
            {{actionItemObject.text}}
        </base-button>
        <UncleModal :modal-object="modal"/>
    </span>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        computed: {
            modal() {
                return this.actionItemObject.action.getModal();
            }
        }
    }
</script>