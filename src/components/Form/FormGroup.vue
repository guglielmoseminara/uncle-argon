<template>
    <card>
        <template slot="header">
            <slot name="header">
                {{ text }}
            </slot>
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