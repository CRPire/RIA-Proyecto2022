const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Información y Localización del evento</h2>
            <ul>
    <li>ID: <strong>{ info.id }</strong></li>
    <li>TITULO: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
