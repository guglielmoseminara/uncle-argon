<template>
    <base-button @click="click" v-if="actionObject.type == 'sdk'" :icon='icon' type="primary">{{text}}</base-button>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        inject: ['$validator'],
        props: {
            form: {
                type: String
            }
        },
        methods: {
            async click() {
                this.$emit('click');
                if (this.validate && this.form) {
                    await this.$validator.validateAll(this.form);
                }
                if (this.$validator.errors.items.filter((item) => {return item.scope == this.form}).length == 0) {
                    this.actionObj.setRequestParams(this.params);
                    await this.execute();
                }
            }
        }
    }
</script>