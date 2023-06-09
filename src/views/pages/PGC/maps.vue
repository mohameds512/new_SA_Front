<template>
    <div>
        ssssssssssssssss
        <leaflet :options="options" :markers="markers" :polygons="polygons"></leaflet>
    </div>
  </template>
  
  <script>
  import proj4 from 'proj4';
  import Leaflet from 'easy-vue-leaflet';

  export default {
    name: "Map",
    components: {
      Leaflet
    },
    data() {
        return {
          options : {
                view : {
                    lat: 21.433321833866195,
                    lng: 39.82011367462904,
                    zoom: 12,
                }
            },
            polygons:[
              {
                latlngs : [[ 21.433321833866195, 39.82011367462904 ], [ 21.433353235745546, 39.82025243431563 ], [ 21.433275965809546, 39.820277814598214 ], [ 21.4332610540562, 39.82021793416578 ], [ 21.433241395152027, 39.820118291147104 ] ]
              },
              {
                latlngs : [[ 21.433321833777000, 39.82011360021111 ], [ 21.432335323511111, 39.82025243222222 ], [ 21.433275965333222, 39.820277814444333 ], [ 21.4332610555444, 39.82021793666555 ], [ 21.433241395777666, 39.820118298887777 ] ],
                color:'red',
              }
            ],
            markers : [
            {
                position : {
                    lat : 21.433353235745546, // the latitude of the marker
                    lng : 39.82025243431563, // the longitude of the marker
                }
                
            },
          ],
            right_coors:[],
            myIcon:null,
            myPolygon:null,
            zoom: 30,
            center: [21.433321833866195,  21.43011367462905],
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
      
    },
    methods: {
      
      
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

    
    },
  };
  </script>
  <style>
  @import url('https://unpkg.com/leaflet@1.6.0/dist/leaflet.css');
</style>