<template>
    <div>
        <base-button type="primary" icon="fas fa-filter" @click="modals.modal0 = true">
        </base-button>
        <modal :show.sync="modals.modal0">
            <div v-if="groupsList.length > 0">
                <div class="row" v-for="(group, gindex) in groupsList" :header="group.text" :key="gindex">
                    <div class="col" v-for="(field, findex) in group.getFields()" :key="findex">
                        <UncleFilterFieldAbstract :type="field.type" :value="filtersValue[field.name]" @input="filterUpdate(field, $event)" :field-object="field" :text="field.text"/>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="form-group" v-for="(field, findex) in fieldsList" :key="findex">
                    <UncleFilterFieldAbstract :type="field.type" :value="filtersValue[field.name]" @input="filterUpdate(field, $event)" :field-object="field"/>
                </div>
            </div>
            <template slot="footer">
                <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
                <base-button @click="submit()" type="primary">Conferma</base-button>
            </template>
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