<template>
    <div class="summary">
        <p slot="actions" v-show='actionsList && actionsList.length > 0'>
            <UncleActionButton v-for='(actionItem, aindex) in actionsList' :key='aindex' :action-item-object='actionItem'>{{actionItem.text}}</UncleActionButton>
        </p>
        <div class="cols-layout-container">            
            <template v-if="item && groupsList.length > 0">
                <UncleSummaryGroup v-for="(group, gindex) in groupsList"
                    class="group col-layout-6"
                    :key='gindex' 
                    :text='group.text' 
                >
                    <template slot="header">
                        <p class="title"> {{group.getTitle()}} </p>   
                    </template>
                     <!-- :class="'field-'+field.type" ?? mmm -->
                    <div class="field" v-for="(field, findex) in group.getFields()" :key='findex' :text='field.text'>
                        <label class="label">
                            <b>{{field.text}}</b>
                        </label>
                        <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field.type, field.name)" />
                    </div>
                </UncleSummaryGroup>
            </template>
            <template v-else>
                <ul v-if="item">
                    <li v-for="(field, findex) in fieldsList" :key="findex">
                        <label>
                            <b>{{field.text}}</b>
                        </label>
                        <p>
                            <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field.type, field.name)" />
                        </p>
                    </li>
                </ul> 
            </template>

        </div>

    </div>
</template>

<script>
    import { SummaryComponent } from 'uncle-vue';

    export default {
        extends: SummaryComponent
    }
</script>

<style scoped lang="scss">
    img {
        width: 200px;
    }
</style>