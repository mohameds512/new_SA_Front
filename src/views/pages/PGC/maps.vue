<template>
  <div style="height: 80vh">
    {{ rightCoords() }}
    <!-- {{ getSubDD(right_coors) }}
    {{ getSubDD(right_coors[2]) }}
    {{ getSubDD(right_coors[3]) }} -->
    <!-- {{ convertUtmToDecimalDegrees(584987.157,2370328.052,37) }} -->
    <!-- 21.43460812154106, longitude: 39.818834251291086 -->
      <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <LMarker :lat-lng="[21.43460812154106,  39.818834251291086]" :icon="myIcon"></LMarker>
        <!-- <LPolygon :lat-lngs="polygonCoords" :options="{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }"></LPolygon> -->
        <!-- <LMarker :lat-lng="[21.433321833866195,  39.82011367462903]" :icon="myIcon"></LMarker> -->
        <!-- <LPolygon v-for="(coor,index) in coords"  :key="index" :lat-lngs="getSubDD(coor)" :options="{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }"></LPolygon> -->
      </LMap>
    </div>
  </template>
  
  <script>
  import proj4 from 'proj4';
  
  import { LMap, LTileLayer, LMarker ,LPolygon,LIcon  } from "vue2-leaflet";
//   import {L} from "leaflet"
  import 'leaflet/dist/leaflet.css';

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
            right_coors:[],
            myIcon:null,
            myPolygon:null,
            zoom: 30,
            center: [21.433321833866195,  39.82011367462905],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            // marker: [31.0416, 31.3608],
            polygonCoords: 
            [ [ 21.433321833866195, 39.82011367462904 ], [ 21.433353235745546, 39.82025243431563 ], [ 21.433275965809546, 39.820277814598214 ], [ 21.4332610540562, 39.82021793416578 ], [ 21.433241395152027, 39.820118291147104 ] ],
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
      coords:[],
      // sub_coords:[],
    },
    mounted(){
      this.onMapLoad() ;
      this.rightCoords();
    },
    methods: {
      rightCoords(){
        let newCoords = this.coords
        console.log(newCoords.length);
        this.coords.forEach((element , index)=>{
          if (!element) {
            this.coords.splice(index);
          }
          // element.forEach(el =>{
          //   let lat = parseFloat(el.coor_north);
          //   console.log('lat');  
          //   console.log(lat);  
          //   console.log(el.coor_north);  
          //   let long = parseFloat(el.coor_east);
          //   if(lat < 0 || long < 0 || lat == null || long == null){
          //     this.coords.splice(index);
          //   }
          // })
            
        });
      
        // console.log('item_coord');
        // console.log(this.coords.length);
        // if(item_coord || item_coord.length > 2){
        //   item_coord.forEach(element => {
        //     if (element.coor_east == null || element.coor_north == null) {
        //       console.log(element);
        //       return false;
        //     }
        //   });
        //   return true;
        // }else{
        //   return false;
        // }
        
      },
      getSubDD(item_coord){
        let poly_data = [];
        // let coords = this.sub_coords;
        item_coord.forEach((element,index) => {
          let lat = parseFloat(element.coor_north);
          let long = parseFloat(element.coor_east);
          let lat_long =  this.convertUtmToDecimalDegrees(lat,long,37);
          poly_data.push([lat_long.latitude,lat_long.longitude]);
        });
        
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
  