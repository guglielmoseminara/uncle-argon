<template>
    <div class="map-input">
        <l-map :zoom=13 :center="coords" ref="map">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="coords" v-if="coords" />
        </l-map>
    </div>
</template>

<script>
    if (typeof window != 'undefined') {
        var leafletGeosearch = require('leaflet-geosearch');
        var OpenStreetMapProvider = leafletGeosearch.OpenStreetMapProvider;
        var vueLeaflet = require('vue2-leaflet');
        var LMap = vueLeaflet.LMap;
        var LTileLayer = vueLeaflet.LTileLayer;
        var LMarker = vueLeaflet.LMarker;
        var L = window.L;
    }

    var component = {
        props: {
            value: {}
        },
        mounted() {
            if (typeof window != 'undefined') {
                this.geosearchOptions = {
                    provider: new OpenStreetMapProvider(),
                    autoClose: true,
                    showMarker: true,
                    showPopup: true,
                    marker: {
                        icon: new L.Icon.Default(),
                        draggable: false,
                    },
                    maxMarkers: 1,
                    keepResult: true,
                }
            }
        },
        computed: {
            coords() {
                if (Array.isArray(this.value)) {
                    return L.latLng(this.value[0], this.value[1]);
                } else {
                    return null;
                }
            }
        },
        data() {
            if (typeof window != 'undefined') {
                return {
                    geosearchOptions: {
                        provider: new OpenStreetMapProvider(),
                    }
                };
            } else {
                return {};
            }
        }
    };
    if (typeof window != 'undefined') {
        component.components = { LMap, LTileLayer, LMarker };
    }
    export default component;
            
</script>

<style lang="scss" scoped>
    div.vue2leaflet-map {
        height: 200px;
    }
</style>