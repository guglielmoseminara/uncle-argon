<template>
    <span>
        <slot name="body" :modal="modal">
            <base-button type="primary" :icon='icon' @click="$modalProvider.open(modal.name)">
                {{text}}
            </base-button>
        </slot>
        <UncleModal :modal-obj="modal"/>
    </span>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        computed: {
            modal() {
                return this.actionObj.getModal();
            }
        }
    }
</script>