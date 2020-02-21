<template>
    <base-button @click="click" v-if="actionObject.type == 'sdk'" :icon="!loading ? computedIcon : ''" :type="color || 'primary'">
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
                const buttonEl = this.$el.querySelector('button');
                if (buttonEl) {
                    this.loaderColor = getComputedStyle(buttonEl).color;
                }
            });
        },
        methods: {
            async click() {
                this.loading = true;
                this.$emit('click');
                if (this.validate && this.form) {
                    await this.$validator.validateAll(this.form);
                }
                if (!this.validate || (this.validate && this.$validator.errors.items.filter((item) => {return item.scope == this.form}).length == 0)) {
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
    ::v-deep .loader {
        margin-right: 10px;
    }
    .loader {
        height: 0.875rem;
        .ball-clip-rotate {
            height: 0.875rem;
        }
        .ball-clip-rotate::v-deep div {
            width: 0.875rem !important;
            height: 0.875rem !important;
            display:block;
        }
    }
</style>