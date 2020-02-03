<template>
    <div class="map-input">
        <l-map :zoom=13 :center="coords" ref="map">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="coords" v-if="coords" />
        </l-map>
    </div>
</template>

<script>
    import { OpenStreetMapProvider } from 'leaflet-geosearch';
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    
    var L = window.L;

    export default {
        props: {
            value: {}
        },
        components: { LMap, LTileLayer, LMarker },
        mounted() {
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
            return {
                geosearchOptions: {
                    provider: new OpenStreetMapProvider(),
                }
            };
        }
    }
</script>

<style lang="scss" scoped>
    div.vue2leaflet-map {
        height: 200px;
    }
</style>