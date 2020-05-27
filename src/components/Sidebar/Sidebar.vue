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
                    <i v-show="!loading" :class="getIcon(navItem.icon)"></i>
                    <span v-show="loading" class="loader"><vue-loaders-ball-clip-rotate :color="'rgba(0, 0, 0, 0.5)'"/></span>
                    <span class="nav-link-text">{{navItem.text}}</span>
                </a>
            </li>
            <sidebar-item v-else-if="!navItem.route && !navItem.action" :key="navkey" :link="{name: navItem.text, icon: getIcon(navItem.icon), path:''}">
                <sidebar-item v-for="(subNavItem, subNavKey) in navItem.getNavItems()"
                    :link="{ name: subNavItem.text, path: subNavItem.route.url }"
                    :key="subNavKey"
                ></sidebar-item>
            </sidebar-item>
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
                sidebarBackground: 'vue',
                loading: false
            };
        },
        methods: {
            getIcon(icon) {
                return this.$iconsProvider.get(icon);
            },
            async click(action) {
                this.loading = true;
                await action.execute();
                this.loading = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar::v-deep  {
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
        .router-link-exact-active {
            background-color:$gray-100;
            .nav-link-text, i {
                color:$primary;
            }
        }
        .navbar-collapse:before {
            margin:0;
        }
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
            margin: 0;
        }
    }
</style>