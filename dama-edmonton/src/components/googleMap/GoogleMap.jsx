import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function GoogleMapLoader() {

  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: 53.56851332068016,
    lng: -113.49961975803355
  };
  
  const mapOptions = {
    "tilt": 0,
    "heading": 0,
    "zoom": 18,
    "mapId": "464549dbb388e9d5"    
  }
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBFSv_RLHmQWzknsUzQBzdz3f3C4f_DzDw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
  
    setMap(map)
  
  }, [])

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