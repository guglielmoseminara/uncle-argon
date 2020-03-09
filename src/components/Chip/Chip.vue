<template>
    <div class="chip" @click="selectEvent" :class="classList">
        <span>{{text}}</span>
        <i @click="closeEvent" class="fa fa-times" aria-hidden="true" v-if="close"></i>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: false
            },
            select: {
                type: Boolean,
                default: false,
                required: false
            },
            close: {
                type: Boolean,
                default: false,
                required: false
            },
            classList: {
                type: String,
                default: 'chip-primary',
                required: false
            }
        },
        methods: {
            closeEvent () {
                this.$emit('closed')
            },
            selectEvent () {
                this.$emit('selected')
            }
        }
    }
</script>

<style scoped lang="scss">
    .chip {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        padding: 0 12px;
        font-size: 0.875rem;
        margin: 5px 0;
    }
    .chip-primary {
        border: 1px solid white;
        color: white;
        background-color: $primary;
    }
    .chip-primary-outline {
        border: 1px solid $primary;
        color:  $primary;
        background-color: white;
    }
    i {
        cursor: pointer;
        color: $primary;
        background-color: white;
        border-radius: 100%;
        width: 1.2em;
        text-align: center;
        padding-top: 1.2em;
        height: 0;
        position: relative;
        vertical-align: middle;
        margin-left: 8.5px;
    }
    i:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1em;
        margin: auto;
    }

    
</style>