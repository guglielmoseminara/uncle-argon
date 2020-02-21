<template>
    <base-button :icon="!loadingFlag ? buttonIcon : ''" @click="$emit('click', $event)" :type="buttonType">
        <span v-show="loadingFlag" class="loader"><vue-loaders-ball-clip-rotate :color="loaderColor"/></span>
        <span><slot></slot></span>
    </base-button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String
            },
            type: {
                type: String
            },
            loading: {
                type: Boolean
            }
        },
        mounted() {
            this.$nextTick(function() {
                const buttonEl = this.$el.querySelector('button');
                if (buttonEl) {
                    this.loaderColor = getComputedStyle(buttonEl).color;
                }
            });
        },
        data() {
            return {
                loadingFlag: this.loading || false,
                loaderColor: 'white',
                buttonType: this.type || 'primary',
                buttonIcon: this.$iconsProvider.get(this.icon) || '',
            }
        },
        watch: {
            loading(value) {
                this.loadingFlag = value; 
            },
            type(value) {
                this.buttonType = value;
            },
            icon(value) {
                this.buttonIcon = this.$iconsProvider.get(value) || '';
            }
        }
    }
</script>

<style lang="scss" scoped>
  button {
      display: flex;
  }
  ::v-deep .loader {
      margin-right: 10px;
  }
  .loader {
      height: 0.875rem;
      .ball-clip-rotate {
          height: 0.875rem;
      }
      .ball-clip-rotate::v-deep div {
          width: 0.875rem !important;
          height: 0.875rem !important;
          display:block;
      }
  }
</style>