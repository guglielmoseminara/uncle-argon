<template>
    <base-button @click="click" v-if="actionItemObject.action.type == 'sdk'" :icon='icon' type="primary">{{actionItemObject.text}}</base-button>
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
                    await this.$validator.validateAll(this.actionItemObject.getForm().name);
                }
                if (this.$validator.errors.items.filter((item) => {return item.scope == this.actionItemObject.getForm().name}).length == 0) {
                    this.actionItemObject.action.setRequestParams(this.params);
                    await this.execute();
                }
            }
        }
    }
</script>