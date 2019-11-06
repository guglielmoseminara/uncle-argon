<template>
    <tabs :activeTab="activeTab">
        <tab-pane v-for="(tab, tindex) in tabsList" :key='tindex' :title="'Tab'+tindex" :name=tab.name>
            <slot :name=tab.name></slot>
        </tab-pane>
    </tabs>
</template>

<script>
    import { TabsComponent } from 'uncle-vue';

    export default {
        extends: TabsComponent,
        data() {
            return {activeTab: 'info'}
        }
    }
</script>