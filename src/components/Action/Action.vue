<template>
    <div></div>
</template>

<script>

    import { ActionComponent } from 'uncle-vue';

    export default {
        extends: ActionComponent,
        computed: {
            icon() {
                return this.$iconsProvider.get(this.actionItemObject.icon);
            }
        },
        created() {
            this.hasIcon = this.icon != null;
        }
    }
</script>