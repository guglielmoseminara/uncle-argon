<template>
    <div class="field-text">
        {{getItemValue(this.value)}}
    </div>
</template>

<script>

    import { SummaryFieldEnumComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldEnumComponent
    }
</script>