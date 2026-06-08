import PlaceSelector from "../PlaceSelector/PlaceSelector";
import Scale from "../Scale/Scale";
import s from './WeatherDashboard.module.scss'
import { getCity, getWeather} from "../../hooks/getWeather";
import type { Weather } from "../../hooks/getWeather";
import { useEffect, useState } from "react";

const WeatherDashboard = () => {

    const [weather, setWeather] = useState<Weather | null>(null);

    useEffect(() => {
        const loadWeatherData = async () => {
            const cityData = await getCity();
            if (cityData) {
                const { lat, lon } = cityData;
                const weatherData = await getWeather(lat, lon); 
                
                if (weatherData) {
                    setWeather(weatherData); 
                }
            }
        };

        loadWeatherData();
    }, []);

    if (!weather) {
        return <div className="container">Loading...</div>;
    }

    return ( 
        <section>
            <PlaceSelector/>
            <div className="container">
                <div className={s.dashboard}>
                    <div className={s.dashboard__gen_info}>
                        <div className={s.dashboard__location}>
                            <h1>London</h1>
                            <p>{weather.sys.country}</p>
                        </div>
                        <div className={s.dashboard__temperature}>
                            <h1>{Math.round(weather.main.temp)}°</h1>
                            <p>Feels: {Math.round(weather.main.feels_like)}°</p>
                        </div>
                    </div>
                    <div className={s.dashboard__additional_info}>
                        <div className={s.dashboard__info__sky}>
                            <img src="/weatherIcons/crescent.svg" alt="weatherIcon"/>
                            <p>{weather.weather.description}</p>
                        </div>
                        <div className={s.dashboard__info__items}>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/maxTemp.svg" alt="arrow-up"/>
                                <p>{Math.round(weather.main.temp_max)}°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/minTemp.svg" alt="arrow-down"/>
                                <p>{Math.round(weather.main.temp_min)}°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/wind.svg" alt="wind"/>
                                <p>{weather.wind.speed} m/sec</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src="/dashboardIcons/humidity.svg" alt="droplet"/>
                                <p>{weather.main.humidity}°</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Scale/>
        </section>
     );
}
 
export default WeatherDashboard;