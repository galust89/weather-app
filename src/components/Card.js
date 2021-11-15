function Card({ day }) {
    console.log(day);
    let dt = new Date(day.dt * 1000);
    let sr = new Date(day.sunrise * 1000).toTimeString();
    let ss = new Date(day.sunset * 1000).toTimeString();
    return (
        <div className="col">
            <div className="card mt-5" style={{ width: "250px" }}>
                <h5 className="card-title p-2">{dt.toDateString()}</h5>
                <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                    className="card-img-top"
                    alt={day.weather[0].description}
                />
                <div className="card-body">
                    <h3 className="card-title">{day.weather[0].main}</h3>
                    <p className="card-text">
                        High {day.temp.max}&deg;C Low {day.temp.min}&deg;C
                    </p>
                    <p className="card-text">High Feels like {day.feels_like.day}&deg;C</p>
                    <p className="card-text">Pressure {day.pressure}mb</p>
                    <p className="card-text">Humidity {day.humidity}%</p>
                    <p className="card-text">UV Index {day.uvi}</p>
                    <p className="card-text">Precipitation {day.pop * 100}%</p>
                    <p className="card-text">Dewpoint {day.dew_point}</p>
                    <p className="card-text">
                        Wind {day.wind_speed}m/s, {day.wind_deg}&deg;
                    </p>
                    <p className="card-text">Sunrise {sr}</p>
                    <p className="card-text">Sunset {ss}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
