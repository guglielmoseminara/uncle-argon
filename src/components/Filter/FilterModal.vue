<template>
    <div>
        <base-button class="filter-button" type="primary" icon="fas fa-filter" @click="modals.modal0 = true">
        </base-button>
        <modal :show.sync="modals.modal0">
            <template slot="header">
                <div class="pl-0 col-4 filters-header__container">
                    <h4 class="modal-title">{{$languageProvider.get('filtersModalTitle')}}</h4>
                </div>
                <div class="pr-0 col-8 filters-buttons__container d-flex justify-content-end">
                    <base-button type="secondary" icon="fas fa-times" @click="modals.modal0 = false">{{$languageProvider.get('close')}}</base-button>
                    <base-button @click="submit()" icon="fas fa-check" type="primary">{{$languageProvider.get('apply')}}</base-button>
                </div>
            </template>
            <div v-if="groupsList.length > 0">
                <div class="row" v-for="(group, gindex) in groupsList" :header="group.text" :key="gindex">
                    <div class="col" v-for="(field, findex) in group.getFields()" :key="findex" v-show="field.type != 'text'">
                        <label>{{field.text}}</label>
                        <UncleFilterFieldAbstract :type="field.type" :value="getFilterFieldValue(field)" @input="filterUpdate(field, $event)" :field-object="field" :text="field.text"/>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="form-group" v-for="(field, findex) in fieldsList" :key="findex" v-show="field.type != 'text'">
                    <label>{{field.text}}</label>
                    <UncleFilterFieldAbstract :type="field.type" :value="getFilterFieldValue(field)" @input="filterUpdate(field, $event)" :field-object="field"/>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    import { FilterComponent } from 'uncle-vue';

    export default {
        extends: FilterComponent,
        mounted() {
            this.$emit('initialized', this.filtersValue);
        },
        methods: {
            submit() {
                this.modals.modal0 = false;
                this.$emit('submit', this.filtersValue);
            }
        },
        data() {
            return {
                modals: {
                    modal0: false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        color: $primary;
    }
    ::v-deep .filters-buttons__container {
        text-align: right;
        > button {
            margin-right: 10px;
        }
    }
    .filter-button {
        margin: 0;
    }
    .filters-buttons__container button:last-child {
        margin: 0;
    }
    ::v-deep .modal-header {
        align-items: center;
        box-shadow: inset 0px -1px 0px rgba(199, 206, 212, 0.3);
    }
    ::v-deep .modal-body {
        .form-group {
            margin-top:0px;
        }
    }
    ::v-deep .close {
        display: none;
    }
</style>