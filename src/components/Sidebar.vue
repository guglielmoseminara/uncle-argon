<template>
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item v-for="(navItem, navkey) in navObject.navItems" :key="navkey" :link="{name: navItem.text, icon: getIcon(navItem.icon), path: navItem.route.url}"/>
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
    }
    

    .router-link-active {
        background-color:$gray-100;
        .nav-link-text, i {
            color:$primary;
        }
    }
</style>