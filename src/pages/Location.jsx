import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';

const libraries = ['places'];

function Location() {
    const [directions, setDirections] = useState(null);

    const origin = { lat: 37.7749, lng: -122.4194 }; // San Francisco
    const destination = { lat: 34.0522, lng: -118.2437 }; // Los Angeles

    const calculateDirections = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRequest = {
            origin,
            destination,
            travelMode: 'DRIVING',
        };
        directionsService.route(directionsRequest, (response, status) => {
            if (status === 'OK') {
                setDirections(response);
            } else {
                console.error('Directions request failed due to:', status);
            }
        });
    };

    useEffect(() => {
        if (window.google) {
            calculateDirections();
        }
    }, []);

    return (
        <LoadScript
            googleMapsApiKey="MY_API_KEY" 
            libraries={libraries}
            onLoad={() => calculateDirections()}
        >
            <GoogleMap
                mapContainerStyle={{ width: '100vw', height: '400px' }}
                zoom={6}
                center={{ lat: (origin.lat + destination.lat) / 2, lng: (origin.lng + destination.lng) / 2 }}
            >
                {directions && (
                    <>
                        <DirectionsRenderer 
                            directions={directions}
                        />
                        <Marker position={origin} />
                        <Marker position={destination} />
                    </>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default Location;