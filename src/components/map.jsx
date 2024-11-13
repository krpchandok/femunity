import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

// Custom component to handle click events and place markers
const ClickableMap = ({ setMarkers }) => {
    useMapEvents({
        click: (event) => {
            const { lat, lng } = event.latlng;
            setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
        },
    });
    
    return null; // This component doesn't need to render anything
};

// Permanent marker positions
const permanentMarkers = [
    { name: "Drishti", lat: 43.7, lng: -79.42, label: "Downtown Toronto" },
    { name: "Nina", lat: 43.9, lng: -79.4, label: "Richmond Hill" },
    { name: "Kirpa", lat: 43.85, lng: -79.6, label: "Vaughan" },
    { name: "Negha",lat: 43.8667, lng: -79.2667, label: "Markham" },
];

// Rename the Map component to avoid conflict with JavaScript's Map
const MyMap = () => {
    const [markers, setMarkers] = useState([]);

    return (
        <MapContainer 
            center={[43.75, -79.4]}  // Adjusted center to be more central to all locations
            zoom={10}  // Zoomed out to make all markers visible
            style={{ height: '75vh', width: '50%', margin: 'auto'}}
            id="map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickableMap setMarkers={setMarkers} />

            {/* Permanent markers */}
            {permanentMarkers.map((position, idx) => (
                <Marker key={idx} position={[position.lat, position.lng]}>
                    <Popup>
                        <Link to="/chat"> 
                        <Button>
                            Chat with {position.name}
                        </Button>
                        </Link>
                    </Popup>
                </Marker>
            ))}

            {/* Dynamic markers added by clicking */}
            {markers.map((position, idx) => (
                <Marker key={`dynamic-${idx}`} position={[position.lat, position.lng]}>
                    <Popup>
                        Marker at [{position.lat.toFixed(4)}, {position.lng.toFixed(4)}]
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MyMap;
