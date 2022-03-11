import React from 'react'

// Google Maps Dependencies

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// API Key AIzaSyBFSv_RLHmQWzknsUzQBzdz3f3C4f_DzDw
//53.56851332068016, -113.49961975803355

const containerStyle = {
    width: '1200px',
    height: '1200px'
  };
  
  const center = {
    lat: 53.56851332068016,
    lng: -113.49961975803355
  };
  
  function GoogleMapLoader() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBFSv_RLHmQWzknsUzQBzdz3f3C4f_DzDw"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
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
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(GoogleMapLoader)