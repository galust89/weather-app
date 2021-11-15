import { useState, useEffect, useCallback } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        error: null,
        lat: "",
        lng: ""
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            error: null,
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    };

    const onError = useCallback(error => {
        setLocation(state => {
            return {
                ...state,
                loaded: true,
                error: error
            };
        });
    }, []);

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [onError]);

    return location;
};

export default useGeolocation;
