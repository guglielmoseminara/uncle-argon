<template>
    <modal :show.sync="isOpened">
     <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalObject.title}}</h5>
     </template>
     <div>
    <!-- <template v-if="formObject">
        <UncleForm ref="form" :form='formObject.name'/>
    </template> -->
      <slot></slot>
     </div>
     <template slot="footer">
         <base-button v-if="hasCloseBtn" type="secondary" @click="close()">Close</base-button>
         <!-- <base-button @click="formSubmit" v-if="formObject" type="primary">Invia</base-button> -->
     </template>
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
            id: {
                type: String,
                required: false,
                default: 'modal1'
            },
        },
        created() {
            if (this.formObject !== null && this.formObject !== undefined) {
                this.formObject = this.getComponents('Form').pop();
            }
            this.$eventHub.$on('opened',  (value) => {
                if (this.id === value.modalId) {
                    this.isOpened = value.visible;
                }
            });
        },
        beforeDestroy(){
            this.$eventHub.$off('show-registration');
        },
        methods: {
            formSubmit() {
                this.$refs.form.actionClick();
            },
            close() {
                this.$modalProvider.close();
            }
        },
        data() {
            return {
                isOpened: false,
            }
        },
    }
</script>

<style scoped lang="scss">
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