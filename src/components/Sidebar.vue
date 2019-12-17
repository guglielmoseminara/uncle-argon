<template>
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <template v-for="(navItem, navkey) in navObject.navItems">
            <sidebar-item v-if="navItem.route" :key="navkey" :link="{name: navItem.text, icon: getIcon(navItem.icon), path: navItem.route.url}"/>
            <li :id="navItem.name" class="nav-item nav-item-button" :key="navkey" v-else-if="navItem.action">
                <a @click="click(navItem.action)" class="nav-link">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="nav-link-text">{{navItem.text}}</span>
                </a>
            </li>
        </template>
      </template>
      <slot name="header"></slot>
    </side-bar>
</template>

<script>
    import { NavComponent } from 'uncle-vue';

    export default {
        extends: NavComponent,
        data() { 
            return {
                sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
            };
        },
        methods: {
            getIcon(icon) {
                return this.$iconsProvider.get(icon);
            },
            click(action) {
                console.log(action.execute());
            }
        }
    }
</script>

<style lang="scss">
    .navbar  {
        // img {
        //     position: absolute;
        // }
        .navbar-nav {
            padding-top: 17.5px;
        }
        .navbar-brand {
            display:none !important;
        }
        .nav-item {
            cursor:pointer;
        }
        .nav-item-button {
            background: $gray-100;
        }
        #logout {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }
    

    .router-link-active {
        background-color:$gray-100;
        .nav-link-text, i {
            color:$primary;
        }
    }
</style>