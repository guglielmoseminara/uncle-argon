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
    import { SummaryGroupComponent } from 'uncle-vue';

    export default {
        extends: SummaryGroupComponent
    }
</script>