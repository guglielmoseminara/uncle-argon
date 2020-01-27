<template>
    <base-button v-if="actionItemObject.action.type == 'sdk'" :icon='icon' @click="click()" type="primary">{{actionItemObject.text}}</base-button>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        inject: ['$validator'],
        methods: {
            async click() {
                this.$emit('click');
                if (this.actionItemObject.validate) {
                    this.$validator.validateAll(this.actionItemObject.getForm().name);
                }
                if (this.$validator.errors.items.filter((item) => {return item.scope == this.actionItemObject.getForm().name}).length == 0) {
                    this.actionItemObject.action.setRequestParams(this.paramsObject);
                    const response = await this.execute();
                }
            }
        }
    }
</script>