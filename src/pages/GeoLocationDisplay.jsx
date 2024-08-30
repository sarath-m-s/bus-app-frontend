import React, { useEffect, useState } from "react";

const GeolocationDisplay = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            {location ? (
                <div className="demo-location-container">
                    <h2>Current Location</h2>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lng}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GeolocationDisplay;