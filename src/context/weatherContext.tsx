import { createContext, useState, useEffect } from "react";
import type { ReactNode} from "react";
import { useCustomDispatch, useCustomSelector } from "../hooks/store";
import { fetchCurrentWeather } from '../store/thunks/fetchCurrentWeather';
import type {Weather} from '../store/types/types';
//import {initialState} from '../store/slices/currentWeatherSlicer'
import type {WeatherResponse} from '../store/slices/currentWeatherSlicer'

interface WeatherContextType {
    weather: Weather;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    unit: string;
    setUnit: (query: string) => void;
    isLoading: boolean;
    response: WeatherResponse;

}

export const WeatherContext = createContext<WeatherContextType>({
    weather: {} as Weather,
    searchQuery: '',
    setSearchQuery: () => {},
    unit: '',
    setUnit: () => {}, 
    isLoading: false,
    response: {
        cod: 0,
        message: '',
    },
})

interface WeatherContextProviderProps {
    children: ReactNode;
}

function WeatherContextProvider({children}:WeatherContextProviderProps) {
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

    return (
        <WeatherContext.Provider value={{weather, searchQuery, setSearchQuery, unit, setUnit, isLoading, response}}>
            {children}
        </WeatherContext.Provider>
    );
}
export default WeatherContextProvider;