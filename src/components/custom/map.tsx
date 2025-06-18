"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import MapLibreMap from "react-map-gl/maplibre";

interface Props {
    initialLongitude: number;
    initialLatitude: number;
    initialZoom: number;
    children?: React.ReactNode;
}

const Map = ({ initialLongitude, initialLatitude, initialZoom, children }: Props) => {
    return (
        <MapLibreMap
            initialViewState={{
                longitude: initialLongitude,
                latitude: initialLatitude,
                zoom: initialZoom,
            }}
            mapStyle="/geolonia-style.json"
        >
            {children}
        </MapLibreMap>
    );
};

export default Map;
