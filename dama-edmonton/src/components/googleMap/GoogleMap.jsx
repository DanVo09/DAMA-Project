import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Tween, update, Easing } from "@tweenjs/tween.js";



const containerStyle = {
    width: '100%',
    height: '100%'
  };
 
const center = {
    lat: 53.56851332068016,
    lng: -113.49961975803355
  };

  const apiOptions = {
    "id": 'google-map-script',
    "version": "beta",
    "map_ids": ["464549dbb388e9d5"],
    "googleMapsApiKey": "AIzaSyBFSv_RLHmQWzknsUzQBzdz3f3C4f_DzDw",
  };

  const mapOptions = {
  "tilt": 0,
  "heading": 0,
  "mapId": "2e8585d53d21223e",
   keyboardShortcuts: false,
   "center": { lat: 53.56851332068016, lng: -113.49961975803355 }
}

const cameraOptions = {
  tilt: 0,
  heading: 0,
  zoom: 18,
  center: { lat: 53.56851332068016, lng: -113.49961975803355 },
};

function GoogleMapLoader() {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      mapIds: ['464549dbb388e9d5'],
      googleMapsApiKey: "AIzaSyBFSv_RLHmQWzknsUzQBzdz3f3C4f_DzDw",
      version: "beta"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
     
      const apiLoader = new Loader(apiOptions);
      apiLoader.load();
      initWebGLOverlayView(map);
      setMap(map)
    }, [])

    function initWebGLOverlayView (map) {
        const webglOverlayView = new window.google.maps.WebGLOverlayView();
        let scene, renderer, camera, loader;
        // WebGLOverlayView code goes here
      
        webglOverlayView.onAdd = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera();
            const ambientLight = new THREE.AmbientLight( 0xffffff, 0.75 );
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
            directionalLight.position.set(0.5, -1, 0.5);
            scene.add(directionalLight);
      
            loader = new GLTFLoader();
            const source = 'pin.gltf';
            loader.load(
              source,
              gltf => {
                gltf.scene.scale.set(25,25,25);
                gltf.scene.rotation.x = 180 * Math.PI/180;
                scene.add(gltf.scene);
              }
            );
        };
      
        webglOverlayView.onContextRestored = ({gl}) => {
            renderer = new THREE.WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            ...gl.getContextAttributes(),
          });
      
          renderer.autoClear = false;
      
          loader.manager.onLoad = () => {        
            renderer.setAnimationLoop(() => {
              map.moveCamera({
                "tilt": mapOptions.tilt,
                "heading": mapOptions.heading,
                "zoom": mapOptions.zoom
              });            
              
              // rotate the map 360 degrees 
              if (mapOptions.tilt < 67.5) {
                mapOptions.tilt += 0.5
              } else if (mapOptions.heading <= 360) {
                mapOptions.heading += 0.2;
              } else {
                renderer.setAnimationLoop(null)
              }
            });        
          }
        };
      
        webglOverlayView.onDraw = ({gl, transformer}) => {
          const matrix = transformer.fromLatLngAltitude({
              lat: mapOptions.center.lat,
              lng: mapOptions.center.lng,
              altitude: 120,
          });
        camera.projectionMatrix = new THREE.Matrix4().fromArray(matrix);
          
          webglOverlayView.requestRedraw();
          renderer.render(scene, camera);
          renderer.resetState();
        };
      
        webglOverlayView.setMap(map)
      }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
   ) : <></>
}


export default React.memo(GoogleMapLoader)