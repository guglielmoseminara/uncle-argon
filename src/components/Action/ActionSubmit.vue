<template>
    <base-button v-if="actionItemObject.action.type == 'sdk'" :icon='icon' @click="click()" type="primary">{{actionItemObject.text}}</base-button>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        inject: ['$validator'],
        methods: {
            click() {
                this.$emit('click');
                if (this.actionItemObject.validate) {
                    this.$validator.validateAll();
                }
                this.actionItemObject.action.setRequestParams(this.paramsObject);
                this.execute();
            }
        }
    }
</script>