import PlaceSelector from "../PlaceSelector/PlaceSelector";
import Scale from "../Scale/Scale";
import s from './WeatherDashboard.module.scss';
import { useEffect, useState } from "react";

import crescentImg from "/weatherIcons/crescent.svg";
import maxTempImg from "/dashboardIcons/maxTemp.svg";
import minTempImg from "/dashboardIcons/minTemp.svg";
import windImg from "/dashboardIcons/wind.svg";
import humidityImg from "/dashboardIcons/humidity.svg";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";


const WeatherDashboard = () => {
    const [searchQuery, setSearchQuery] = useState<string>('London');
    const [unit, setUnit] = useState<string>(() => {return localStorage.getItem('weather-unit') || 'metric';}); 
    const dispatch =  useCustomDispatch();
    const {weather, isLoading, response} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    
    useEffect(() => {
        dispatch(fetchCurrentWeather(searchQuery, unit));
    }, [dispatch, searchQuery, unit]);

    useEffect(() => {
        localStorage.setItem('weather-unit', unit);
    }, [unit]);
    

    if (isLoading) {
        return (
            <>
             <div className="container">
                <PlaceSelector setSearch={setSearchQuery} response={response}/>
                    <div className={s.dashboard}>
                        <div className={s.dashboard__gen_info}>
                            <div className={s.dashboard__loading}>Loading...</div>
                        </div>
                    </div>
                    <Scale currentUnit={unit} onUnitChange={setUnit}/>
                </div>
            </>
        )
    }

    return ( 
        <section>
            <div className="container">
                <PlaceSelector setSearch={setSearchQuery} response={response}/>
                {weather &&(<div className={s.dashboard}>
                    <div className={s.dashboard__gen_info}>
                        <div className={s.dashboard__location}>
                            <h1>{weather.name || searchQuery}</h1>
                            <p>{weather.sys.country}</p>
                        </div>
                        <div className={s.dashboard__temperature}>
                            <h1>{Math.round(weather.main.temp)}°</h1>
                            <p>Feels: {Math.round(weather.main.feels_like)}°</p>
                        </div>
                    </div>
                    <div className={s.dashboard__additional_info}>
                        <div className={s.dashboard__info__sky}>
                            <img src={crescentImg} alt="weatherIcon"/>
                            <p>{weather.weather.description}</p>
                        </div>
                        <div className={s.dashboard__info__items}>
                            <div className={s.dashboard__info__item}>
                                <img src={maxTempImg} alt="arrow-up"/>
                                <p>{Math.round(weather.main.temp_max)}°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src={minTempImg} alt="arrow-down"/>
                                <p>{Math.round(weather.main.temp_min)}°</p>
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src={windImg} alt="wind"/>
                                <p>{weather.wind.speed} {localStorage.getItem('weather-unit') === 'metric' ? 'm/sec' : 'ft/sec'}</p> 
                            </div>
                            <div className={s.dashboard__info__item}>
                                <img src={humidityImg} alt="droplet"/>
                                <p>{weather.main.humidity}°</p>
                            </div>
                        </div>
                       
                    </div>
                </div>)}
            <Scale currentUnit={unit} onUnitChange={setUnit}/>
            </div>
        </section>
     );
}
 
export default WeatherDashboard;