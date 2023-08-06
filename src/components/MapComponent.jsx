import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '/images/icon-location.svg';

const customMarker = L.icon({
    iconUrl: icon,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
    popupAnchor: [0, -56]
});

const MapComponent = ({ location, latLong }) => {

    const position = [latLong.latitude, latLong.longitude];
    
    return (
        <div className='absolute top-52 left-0 right-0 z-[-1] w-full h-full'>
            <MapContainer
                center={position}
                zoom={13}
                zoomControl={false}
                style={
                    {
                        height: '100%',
                        width: '100%'
                    }
                }
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customMarker}>
                    <Popup>
                        {location}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
