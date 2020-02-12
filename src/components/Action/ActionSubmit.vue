<template>
    <base-button @click="click" v-if="actionObject.type == 'sdk'" :icon='icon' :type="color || 'primary'">
        <span v-show="loading" class="loader"><vue-loaders-ball-clip-rotate :color="loaderColor"/></span>
        <span>{{text}}</span>
    </base-button>
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
        mounted() {
            this.$nextTick(function() {
                this.loaderColor = getComputedStyle(this.$el.querySelector('button')).color;
            });
        },
        methods: {
            async click() {
                this.loading = true;
                this.$emit('click');
                if (this.validate && this.form) {
                    await this.$validator.validateAll(this.form);
                }
                if (this.$validator.errors.items.filter((item) => {return item.scope == this.form}).length == 0) {
                    this.actionObject.setRequestParams(this.params);
                    await this.execute();
                }
                this.loading = false;
            }
        },
        data() {
            return {
                loading: false,
                loaderColor: 'white'
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        display: flex;
    }
    .loader {
        margin-right: 10px;
    }
    .loader, .loader::v-deep .ball-clip-rotate {
        height: 0.875rem;
    }
    .loader::v-deep .ball-clip-rotate {
        margin-right: 10px;
    }
    .loader::v-deep .ball-clip-rotate>div{
        width: 0.875rem;
        height: 0.875rem;
        display:block;
    }
</style>