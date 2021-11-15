export const fetchWeather = async (lat, lng) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=e7f553475f175dfdbe746b1be5b3375c`
    );
    const data = await response.json();
    return data.daily;
};
