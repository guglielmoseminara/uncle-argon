<template>
    <span class="action__container" v-if="actionObject.type == 'sdk' || actionObject.type == 'service'">
        <base-button :icon="!loading ? computedIcon : ''" @click="clickSdk" :type="color || 'primary'">
            <span v-show="loading" class="loader"><vue-loaders-ball-clip-rotate :color="loaderColor"/></span>
            <span>{{text}}</span>
        </base-button>
    </span>
    <span class="action__container" v-else-if="actionObject.type == 'nav'">
        <UncleActionNavItem :action-obj='actionObject' :params='params'>
            <base-button :icon='computedIcon' :type="color || 'primary'">{{text}}</base-button>
        </UncleActionNavItem>
    </span>
    <span class="action__container" v-else-if="actionObject.type == 'modal'">
        <UncleActionModalItem :action-obj='actionObject' :text='text' :params='params' :icon='icon'></UncleActionModalItem>
    </span>
</template>

<script>
    import ActionComponent from './Action.vue';
    
    export default {
        extends: ActionComponent,
        mounted() {
            this.$nextTick(function() {
                if (this.$el.querySelector) {
                    const buttonEl = this.$el.querySelector('button');
                    if (buttonEl) {
                        this.loaderColor = getComputedStyle(buttonEl).color;
                    }
                }
            });
        },
        methods: {
            async clickSdk(event) {
                event.stopPropagation(); 
                this.loading = true;
                await this.execute();
                setTimeout(() => {
                    this.loading = false;
                }, 1);
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
    .action__container {
        margin-right: 10px;
    }
</style>