<template>
    <span>
        <slot name="body" :modal="modal">
            <base-button :type="color || 'primary'" :icon='computedIcon' v-if="modal" @click="$modalProvider.open(modal.name)">
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
        created() {
            this.modal = this.actionObject.getModal();
        },
        data(){
            return {
                modal: null
            };
        }
    }
</script>