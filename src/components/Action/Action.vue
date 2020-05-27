<template>
    <div></div>
</template>

<script>

    import { ActionComponent } from 'uncle-vue';

    export default {
        extends: ActionComponent,
        methods: {
            async checkConfirm() {
                const confirmResponse = confirm(this.$languageProvider.get('confirmText'));
                if (confirmResponse) {
                    await this.onConfirmation();
                }
            }
        },
        computed: {
            computedIcon() {
                if (this.icon) {
                    return this.$iconsProvider.get(this.icon);
                }
                else {
                    return null;
                }
            }
        },
        created() {
            this.hasIcon = this.computedIcon != null;
        }
    }
</script>