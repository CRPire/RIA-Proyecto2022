import { Icon } from '@iconify/react'
import huracanesIcon from '@iconify/icons-noto/wind-face'
import fuegoIcon from '@iconify/icons-emojione/fire'
import congeladoIcon from '@iconify/icons-noto/ice'
import volcanIcon from '@iconify/icons-twemoji/volcano'


const LocationMarker = ({id, lat, lng, onClick }) => {
    if(id === 10) { 
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={huracanesIcon} className="tormenta-icon" />
            </div>
        )
    }
    if(id === 8) { 
       return (
            <div className="location-marker" onClick={onClick}>
               <Icon icon={fuegoIcon} className="incendio-icon" />
             </div>
       )
    }
    if(id === 12) { 
        return (
             <div className="location-marker" onClick={onClick}>
                <Icon icon={volcanIcon} className="volcan-icon" />
              </div>
        )
     }
     if(id === 15) { 
        return (
             <div className="location-marker" onClick={onClick}>
                <Icon icon={congeladoIcon} className="congelado-icon" />
              </div>
        )
     }
   
}

export default LocationMarker
