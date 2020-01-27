<template>
    <div ref="input" class="resource-many-field">
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="update"
        >
            <div
                slot="autocomplete-item"
                slot-scope="props"
                @click="props.performAdd(props.item)"
            >
            {{ props.item.text }}
            </div>
        </vue-tags-input>
        <base-button v-if="fieldObject.modal" :type="'primary'" @click="add">Aggiungi</base-button>
        <UncleModal v-if="fieldObject.modal" :modal-obj="fieldObject.modal"/>
    </div>
</template>

<script>
    import { FormFieldResourceManyComponent } from 'uncle-vue';

    export default {
        extends: FormFieldResourceManyComponent,
        data() {
            return {
                tag: '',
                debounce: null,
            };
        },
        mounted() {
            this.$refs.input.querySelector('.ti-input').classList.add('form-control');
        },
        watch: {
            'tag': 'initItems',
        },
        methods: {
            update(newTags) {
                this.itemsList = []
                this.tags = newTags;
                this.formValue = this.tags.map(item => {
                    return item.item
                });
                this.triggerInput();
            },
            initItems() {
                clearTimeout(this.debounce);
                this.debounce = setTimeout(async () => {
                    await this.loadItems(this.tag);
                }, 600);
            },
            createTags(val) {
                this.tags = val.map((item) => {
                    return {
                        text: item[this.fieldObject.item.textField],
                        item: item
                    }
                });
            },
            add() {
                if (this.fieldObject.modal) {
                    this.$modalProvider.open(this.fieldObject.modal.name);
                }
            }
        },
        computed: {
            filteredItems() {
                return this.itemsList.map(item => {
                    return {
                        text: item[this.fieldObject.item.textField],
                        item: item
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .ti-input {
        min-height:calc(1.5em + 1.25rem + 2px);
        height:auto;
    }
    .resource-many-field {
        display:flex;
    }
    .vue-tags-input {
        max-width:100%;
        width: 100%;
        margin-right: 20px;
    }
</style>