<template>
  <div style="height: 80vh">
    {{ getSubDD() }}
          
    </div>
  </template>
  
  <script>
  import proj4 from 'proj4';
  
  export default {
    name: "Map",
    components: {
        // L,
        // LPolygon ,
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
  