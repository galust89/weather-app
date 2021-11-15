import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useGeolocation from "./hooks/useGeolocation";
import { getWeather, selectWeather } from "./weather/weatherSlice";
import Card from "./components/Card";

function App() {
    const location = useGeolocation();
    const { data, status } = useSelector(selectWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        const { lat, lng } = location;
        if (lat && lng) {
            dispatch(getWeather({ lat, lng }));
        }
    }, [location.lat, location.lng]);

    console.log(location);

    if (!location.loaded) {
        return null;
    }

    if (location.error) {
        return <div>{location.error.message}</div>;
    }

    return (
        <main className="container pb-5">
            {status === "loading" ? (
                <div className="spinner-border text-primary d-flex justify-content-center" role="status" />
            ) : (
                <>
                    <h2>Weather</h2>
                    <div className="row gx-2">
                        {data &&
                            data.map(day => {
                                return <Card day={day} key={day.dt} />;
                            })}
                    </div>
                </>
            )}
        </main>
    );
}

export default App;
