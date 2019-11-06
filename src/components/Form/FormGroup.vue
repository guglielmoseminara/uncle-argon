<template>
    <card>
        <template slot="header">
            {{text}}
        </template>
        <slot></slot>
    </card>
</template>

<script>
    import { FormGroupComponent } from 'uncle-vue';

    export default {
        extends: FormGroupComponent
    }
</script>