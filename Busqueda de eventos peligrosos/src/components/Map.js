import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const TORMENTAS_SEVERAS = 10;
const INCENDIOS = 8;
const VOLCANES = 12;
const CONGELADOS = 15;
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === TORMENTAS_SEVERAS) {
           return <LocationMarker key={index} id= {ev.categories[0].id}  lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === INCENDIOS) {
           return <LocationMarker key={index} id={ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === VOLCANES) {
           return <LocationMarker key={index} id= {ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        if(ev.categories[0].id === CONGELADOS) {
           return <LocationMarker key={index} id= {ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAR30kpGKdd4meXFexV_AE0ErcB5KCiU5k' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
       
        lat: -34.68130353657195,
        lng: -56.14926034127547
    },
    zoom: 6
}

export default Map
