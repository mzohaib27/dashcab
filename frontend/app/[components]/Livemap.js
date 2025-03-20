"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RecenterMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 15, { animate: true });
    }
  }, [center, map]);
  return null;
};

const fetchCoordinates = async (address) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    console.log("Fetched Coordinates Data:", data);
    if (Array.isArray(data) && data.length > 0) {
      const selectedLocation = data[0]; // Pick first result
      return [
        parseFloat(selectedLocation.lat),
        parseFloat(selectedLocation.lon),
      ];
    } else {
      console.warn(`No results found for "${address}".`);
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
  return null;
};

const LiveMap = ({ pickup, destination }) => {
  const [position, setPosition] = useState([25.276987, 55.296249]); // Default to Dubai
  const [pickupCoords, setPickupCoords] = useState([25.276987, 55.296249]); // Default to Dubai
  const [destinationCoords, setDestinationCoords] = useState([
    25.276987, 55.296249,
  ]);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (pickup) {
      fetchCoordinates(pickup).then((coords) => {
        if (coords) setPickupCoords(coords);
      });
    }
  }, [pickup]);

  useEffect(() => {
    if (destination) {
      fetchCoordinates(destination).then((coords) => {
        if (coords) setDestinationCoords(coords);
      });
    }
  }, [destination]);

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: 25, margin: 12 }}
    >
      <RecenterMap center={position} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* User's Current Location */}
      <Marker position={position}>
        <Popup>Your Location</Popup>
      </Marker>

      {/* Pickup Location */}
      {pickupCoords && (
        <Marker position={pickupCoords}>
          <Popup>Pickup: {pickup}</Popup>
        </Marker>
      )}

      {/* Destination Location */}
      {destinationCoords && (
        <Marker position={destinationCoords}>
          <Popup>Destination: {destination}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LiveMap;
