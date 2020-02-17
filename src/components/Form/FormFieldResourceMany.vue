<template>
    <div ref="tagsinput" class="resource-many-field">
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="update"
            :data-max-tags='fieldObject.max ? parseInt(fieldObject.max) : false'
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
            this.$refs.tagsinput.querySelector('.ti-input').classList.add('form-control');
        },
        watch: {
            tag: 'initItems',
            tags() {
                this.checkInput();
            }
        },
        methods: {
            update(newTags) {
                this.itemsList = []
                this.tags = newTags;
                this.checkInput();
                if (parseInt(this.fieldObject.max) == 1) {
                    this.formValue = this.tags.length > 0 ? this.tags[0].item : null;
                } else {
                    this.formValue = this.tags.map(item => {
                        return item.item
                    });
                }
                this.triggerInput();
            },
            initItems() {
                clearTimeout(this.debounce);
                this.debounce = setTimeout(async () => {
                    await this.loadItems(this.tag);
                }, 600);
            },
            createTags(val) {
                if (Array.isArray(val)) {
                    this.tags = val.map((item) => {
                        return {
                            text: item[this.fieldObject.item.textField],
                            item: item
                        }
                    });
                } else if (val[this.fieldObject.item.textField]){
                    this.tags = [{
                        text: val[this.fieldObject.item.textField],
                        item: val
                    }]
                }
                this.checkInput();
            },
            add() {
                if (this.fieldObject.modal) {
                    this.$modalProvider.open(this.fieldObject.modal.name);
                }
            },
            checkInput() {
                if (this.fieldObject.max && this.$refs.tagsinput) {
                    if (this.tags.length == this.fieldObject.max) {
                        this.$refs.tagsinput.querySelector('.ti-input input').style.display = "none";
                    } else {
                        this.$refs.tagsinput.querySelector('.ti-input input').style.display = "block";
                    }
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