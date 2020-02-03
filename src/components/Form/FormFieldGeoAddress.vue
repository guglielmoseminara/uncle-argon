<template>
    <div class="geoaddress-input">
        <!--<input v-model="value" style="display: none">!-->
        <l-map :zoom=13 :center="coords" ref="map">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="coords" v-if="coords" />
            <v-geosearch ref="geosearch" :options="geosearchOptions"></v-geosearch>
        </l-map>
    </div>
</template>

<script>
    import { FormFieldComponent } from 'uncle-vue';
    import { OpenStreetMapProvider } from 'leaflet-geosearch';
    import VGeosearch from 'vue2-leaflet-geosearch';
    import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from 'vue2-leaflet';
    
    export default {
        extends: FormFieldComponent,
        components: { VGeosearch, LMap, LTileLayer, LMarker, LTooltip, LPopup },
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
            var map = this.$refs.map.mapObject;
            map.on('geosearch/showlocation', (ev) => {
                this.formValue = {};
                this.formValue[this.fieldObject.addressField] = ev.location.label;
                this.formValue[this.fieldObject.coordsField] = [ev.location.y, ev.location.x];
                this.triggerInput();
            });
        },
        computed: {
            coords() {
                if (this.formValue) {
                    return L.latLng(this.formValue[this.fieldObject.coordsField][0], this.formValue[this.fieldObject.coordsField][1]);
                } 
            }
        },
        data() {
            return {
                geosearchOptions: {
                    provider: new OpenStreetMapProvider(),
                }
            };
        },
        watch: {
            value(val) {
                this.$refs.geosearch.setQuery(val ? val[this.fieldObject.addressField] : '');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .geoaddress-input::v-deep {
        div.vue2leaflet-map {
            height: 200px;
        }

        div.leaflet-control-zoom.leaflet-bar.leaflet-control {
            display: none;
        }

        .leaflet-control-container > .leaflet-top{
            right:0;
        }

        .leaflet-control-container .leaflet-bar {
            position: absolute;
            right: 28px;
            left: 20px;
        }

        .leaflet-control-container  form {
            right: 0;
            padding: 0;
            border: none !important;
            .glass {
                border: none;
            }
        }

        .leaflet-control-container .leaflet-bar-part-single {
            border-radius: 4px 0px 0px 4px !important;
            width: 30px;
            height: 30px;
            margin-top: -2px;
        }

        // geosearch stylesheet
        /* global styling */
        .leaflet-control-geosearch *,
        .leaflet-control-geosearch *:before,
        .leaflet-control-geosearch *:after {
            box-sizing: border-box;
        }

        /* leaflet button styling */
        .leaflet-control-geosearch .leaflet-bar-part {
            border-radius: 4px;
            border-bottom: none;
        }

        .leaflet-control-geosearch a.leaflet-bar-part:before,
        .leaflet-control-geosearch a.leaflet-bar-part:after {
            position: absolute;
            display: block;
            content: '';
        }

        /* magnifying glass */
        .leaflet-control-geosearch a.leaflet-bar-part:before {
            top: 19px;
            left: 16px;
            width: 8px;
            border-top: 2px solid #555;
            transform: rotateZ(45deg);
        }

        .leaflet-control-geosearch a.leaflet-bar-part:after {
            top: 6px;
            left: 6px;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            border: 2px solid #555;
        }

        /* resets for pending and error icons */
        .leaflet-control-geosearch.error a.leaflet-bar-part:before,
        .leaflet-control-geosearch.pending a.leaflet-bar-part:before {
            display: none;
        }

        .leaflet-control-geosearch.pending a.leaflet-bar-part:after,
        .leaflet-control-geosearch.error a.leaflet-bar-part:after {
            left: 50%;
            top: 50%;
            width: 18px;
            height: 18px;
            margin: -9px 0 0 -9px;
            border-radius: 50%;
        }

        /* pending icon */
        .leaflet-control-geosearch.pending a.leaflet-bar-part:after {
            content: '';
            border: 2px solid #555;
            border-top: 2px solid #f3f3f3;
            animation: spin 1s linear infinite;
        }

        /* error icon */
        .leaflet-control-geosearch.error a.leaflet-bar-part:after {
            content: '!';
            line-height: initial;
            font-weight: 600;
            font-size: 18px;
            border: none;
        }

        /* search form styling */
        .leaflet-control-geosearch form {
            // display: none;
            position: absolute;
            top: -2px;
            left: 28px;
            border-radius: 0 4px 4px 0;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-left: none;
            background-color: #fff;
            background-clip: padding-box;
            z-index: -1;
            height: auto;
            margin: 0;
            padding: 0 8px;
        }

        .leaflet-control-geosearch.active form {
            display: block;
        }

        .leaflet-control-geosearch form input {
            min-width: 200px;
            width: 100%;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
            font-size: 12px;
            height: 30px;
            border-radius: 0 4px 4px 0;
            text-indent: 8px;
        }

        .leaflet-control-geosearch .results {
            background: #fff;
            max-height: 100px;
            overflow-y: scroll;
        }

        .leaflet-control-geosearch .results > * {
            line-height: 24px;
            padding: 0 8px;
            border: 1px solid transparent;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .leaflet-control-geosearch .results.active {
            padding: 8px 0;
            border-top: 1px solid #c6c6c6;
        }

        .leaflet-control-geosearch .results > .active,
        .leaflet-control-geosearch .results > :hover {
            background-color: #f8f8f8;
            border-color: #c6c6c6;
            cursor: pointer;
        }

        /* add missing border to form */
        .leaflet-control-geosearch .results.active:after {
            content: '';
            display: block;
            width: 0;
            border-left: 2px solid rgba(0, 0, 0, .2);
            position: absolute;
            left: -2px;
            bottom: -2px;
            top: 30px;
        }

        /* animations */
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .leaflet-top .leaflet-control-geosearch.bar,
        .leaflet-bottom .leaflet-control-geosearch.bar {
            display: none;
        }

        .leaflet-control-geosearch.bar {
            position: relative;
            display: block;
            height: auto;
            width: 400px;
            margin: 10px auto 0;
            cursor: auto;
            z-index: 1000;
        }

        .leaflet-control-geosearch.bar form {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-radius: 4px;
        }

        .leaflet-control-geosearch.bar form input {
            min-width: 100%;
            width: 100%;
        }

        .leaflet-control-geosearch.bar .results.active:after {
            opacity: .2;
        }

        .leaflet-right .leaflet-control-geosearch form {
            right: 28px;
            left: initial;
            border-radius: 4px 0 0 4px;
            border-left: inherit;
            border-right: none;
        }

        .leaflet-control-geosearch a.reset {
            color: black;
            position: absolute;
            line-height: 30px;
            padding: 0 8px;
            right: 0;
            top: 0;
            cursor: pointer;
            border: none;
        }

        .leaflet-control-geosearch a.reset:hover {
            background: #f5f5f5;
        }
    }

</style>