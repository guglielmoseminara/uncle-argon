<template>
    <modal :show.sync="isOpened" @close="close">
        <template slot="header">
            <div class="pl-0 col-4 filters-header__container">
                <h4 class="modal-title">{{modalObject.title}}</h4>
            </div>
            <div class="pr-0 col-8 filters-buttons__container d-flex justify-content-end">
                <base-button v-if="hasCloseBtn" type="secondary" icon="fas fa-times" @click="close()">{{$languageProvider.get('close')}}</base-button>
                <UncleActionSubmit v-if="formObject" @click=actionFormClick :action-obj="formObject.action" color="primary" :text="$languageProvider.get('apply')" :validate=true :form="formObject.name" :params='formValue' style="float:right" icon="check"/>
            </div>
        </template>
        <div>
            <div class="d-flex justify-content-center" >
                <vue-loaders-ball-beat v-show="loading"/>
            </div>
            <UncleForm v-if="formObject" :ref="getFormRefName()" :item-obj=itemObj :form='formObject.name' :params="params" @input="updateForm($event)"/>
            <slot name="content" :opened-params="openedParams"></slot>
        </div>
   </modal>
</template>

<script>
    import { ModalComponent } from 'uncle-vue';

    export default {
        extends: ModalComponent,
        props: {
            hasCloseBtn: {
                type: Boolean,
                default: true
            },
        },
        created() {
            this.formObject = this.getComponents('Form').pop();
            this.$eventHub.$on('opened',  (value) => {
                if (this.formObject) {
                    this.loading = true;
                }
                this.openedParams = value;
                if (this.modalObject.name === value.modalId) {
                    this.isOpened = value.visible;
                    console.log("OPENED", this.isOpened);
                    this.params = value.params;
                    if (value.params && value.params.item) {
                        this.itemObj = value.params.item;
                    }
                }
                setTimeout(() => {
                    if (this.$refs[this.getFormRefName()]) {
                        this.$refs[this.getFormRefName()].focus();
                    }
                }, 1);
            });
        },
        methods: {
            formSubmit() {
                this.$refs.modalForm.triggerSubmit();
            },
            close() {
                this.$modalProvider.close(this.modalObject.name);
                this.triggerClose();
            },
            async actionFormClick() {
                await this.$refs[this.getFormRefName()].validateAndSubmit();
                if (this.formObject) {
                    this.$emit('apply', this.formValue);
                }
            },
            updateForm(event) {
                this.formValue = event;
                this.loading = false;
            },
            triggerClose() {
                if (this.formObject) {
                    this.$emit('close', this.formValue);
                    this.itemObj = null;
                }
            },
            getFormRefName() {
                if (this.formObject) {
                    return 'form_'+this.formObject.name;
                }
            }
        },
        data() {
            return {
                isOpened: false,
                formObject: null,
                params: null,
                openedParams: {},
                formValue: null,
                loading: false,
                itemObj: null
            }
        },
    }
</script>

<style scoped lang="scss">
    ::v-deep .modal-header {
        align-items: center;
        text-align:left;
    }
    ::v-deep .close {
        display: none;
    }
    ::v-deep .modal-body {
        padding-top: 0;
        .ball-beat > div{
            background-color: $primary !important;
        }
        .actions__container {
            display: none;
        }
        .fields__container {
            max-width: 100%;
            width: 100%;
            flex: 0 0 100%;
        }
        .fields-container__column {
            width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
        }
        .group {
            width:100%;
            border: none;
            .card-header {
                display: none;
            }
            .card-body {
                padding: 0;
            }
        }
    }
    .gallery-modal::v-deep {
        div.modal-content {
            background: transparent!important;
            box-shadow: none;
            .modal-body {
                border-radius: 10px;
                padding: 0;  
            }
            .modal-header {
                display: none;
            }
        }

        .modal-dialog {
            max-width: 900px!important;
        }
    }
</style>