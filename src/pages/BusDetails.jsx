// BusDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Directions from "./Directions";
import { GET_LOCATION_API_ENDPOINT } from "../helper/constants.js";

const BusDetails = () => {
    const [origin, setOrigin] = useState(null);
    const { bus_id } = useParams(); // Get bus_id from the route parameters

    console.log("Bus ID:", bus_id);

    useEffect(() => {
        fetch(`${GET_LOCATION_API_ENDPOINT}?bus_id=${bus_id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Log the actual data
                // Access the geo_location property of the first element in the array
                const location = data[0].geo_location;
                setOrigin({
                    lat: parseFloat(location.lat),
                    lng: parseFloat(location.lng),
                });
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [bus_id]);

    return origin ? <Directions origin={origin} /> : <div>Loading...</div>;
};

export default BusDetails;