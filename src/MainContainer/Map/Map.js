import React, {useEffect, useRef} from 'react';
// import L from 'leaflet';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Map =(props)=>{
    const mapRef = useRef(null)
    useEffect(
        () => {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWFkZXNoLWJhcmFsIiwiYSI6ImNrcWozN3d1eDBibnkydXBkdmJtY21qM3AifQ.7Si23kBM7Fjb7tdSenXD0w';
            mapRef.current =  new mapboxgl.Map({
                container: 'map', // container id
                style: 'https://api.baato.io/api/v1/styles/breeze?key=bpk.MLkcow8vhdKGJkMivqaw1OiCMAKspIfgbyW-C8-AsLbB',
                center: [85.3175, 27.7109],
                zoom: 12.5,
                attributionControl: false
            });
        },[]
    )
    const markerRef = useRef(null)
    useEffect(
        () => {
             markerRef.current = new mapboxgl.Marker()
            .setLngLat(props.markerPosition)
            .addTo(mapRef.current);
        },[props.markerPosition]
    )
    return (
        <div id='map'></div>
    )

}
// const Map = (props)=> {
//     const osmURL =
//   'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=52ce8b5b94d44030a0c6208707611a06';
//     const layer1 = L.tileLayer(osmURL, { opacity: 0.3 });
//     const layer2 = L.tileLayer(
//       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     { opacity: 1 });
//     const mapRef = React.useRef(null);
//     useEffect( ()=> {
//         mapRef.current =L.map('map', {
//             center: [27.700769, 85.300140],
//             zoom: 13,
//             layers:[layer1,layer2]
//         });
//     }, []);
//     const markerRef = React.useRef(null);
//     useEffect(
//         () => {
//             if (markerRef.current) {
//                 markerRef.current.setLatLng(props.markerPosition);
//             } else {
//                 markerRef.current = L.marker(props.markerPosition).addTo(mapRef.current)
//             }
//         }, [props.markerPosition]
//     );
    
//     return (
//             <div id='map'></div>
//     )
// }

export default Map;