<template>
  <div style="height: 80vh">
    {{ getSubDD() }}
    <!-- {{ convertUtmToDecimalDegrees(584987.157,2370328.052,37) }} -->
      <LMap :zoom="zoom"  style="width: 100%;">
        <LTileLayer :url="url"></LTileLayer>
        <!-- <LMarker :lat-lng="[21.433321833866195,  39.82011367462905]" :icon="myIcon"></LMarker> -->
        <!-- <LMarker :lat-lng="[31.0420, 31.3601]" :icon="myIcon"></LMarker> -->
        <!-- <LPolygon :lat-lngs="[ [ 21.43460812154106, 39.818834251291086 ], [ 21.434574733800847, 39.81888151139584 ], [ 21.43455965272907, 39.818896798837635 ], [ 21.43443181882447, 39.81907509248142 ], [ 21.434400776471602, 39.81904919385381 ], [ 21.43430743355508, 39.81897129419493 ], [ 21.4344691659786, 39.81875580774353 ] ]" :options="{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }"></LPolygon> -->
      </LMap>
    </div>
  </template>
  
  <script>
  import proj4 from 'proj4';
  
  import { LMap, LTileLayer, LMarker ,LPolygon,LIcon  } from "vue2-leaflet";
//   import {L} from "leaflet"
  import 'leaflet/dist/leaflet.css';
import { push } from 'postcss-rtl/lib/affected-props';
  export default {
    name: "Map",
    components: {
        // L,
        LPolygon ,
        LMap,
        LTileLayer,
        LMarker,
        LIcon 
    },
    data() {
        return {
            myIcon:null,
            myPolygon:null,
            zoom: 30,
            center: [21.433321833866130,  39.82011367462904],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            // marker: [31.0416, 31.3608],
            polygonCoords: [
              [31.042, 31.361],
              [31.042, 31.362],
              [31.043, 31.362],
              [31.043, 31.361]
            ],
            polygonCoords_2: [
            [31.0416, 31.3608],
            [31.0416, 31.3600],
            [31.0412, 31.3600],
            [31.0410, 31.3604],
            [31.0412, 31.3608],
            ],
            poly_coors:[],
            // myIcon: {
            //   iconUrl: require('@/assets/images/icons/doc.png'), // replace with your icon file path
            //   iconSize: [25, 41],
            //   iconAnchor: [12.5, 41],
            //   popupAnchor: [0, -41],
            // },
        };
    },
    props:{
      sub_coords:[],
    },
    mounted(){
      this.onMapLoad() ;
    },
    methods: {
      getSubDD(){
        let poly_data = [];
        let coords = this.sub_coords;
        coords.forEach((element,index) => {
          let lat = parseFloat(element.coor_north);
          let long = parseFloat(element.coor_east);
          let lat_long =  this.convertUtmToDecimalDegrees(lat,long,37);
          poly_data.push([lat_long.latitude,lat_long.longitude]);
        });
        // lat_long.latitude
        return poly_data;
        
      },
      convertUtmToDecimalDegrees(easting, northing, utmZone) {
      // Define the UTM and WGS84 CRS
      proj4.defs(`EPSG:${utmZone}`, `+proj=utm +zone=${utmZone} +datum=WGS84 +units=m +no_defs`);
      proj4.defs('EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs');

      // Check if the easting and northing values are swapped
      const isSwapped = easting > 1000000 && northing < 1000000;

      // Convert the UTM coordinates to WGS84 decimal degrees
      const lonLat = proj4(`EPSG:${utmZone}`, 'EPSG:4326', isSwapped ? [northing, easting] : [easting, northing]);

      // Extract the latitude and longitude from the result
      const latitude = lonLat[1];
      const longitude = lonLat[0];

      // Return an object with the latitude and longitude
      return { latitude, longitude };
    },

    onMapLoad() {
        this.$nextTick(() => {
            let icon= L.icon({
                    iconUrl: require('@/assets/maps/icons/location.png'),
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            this.myIcon = icon
        });
        }
    },
  };
  </script>
  