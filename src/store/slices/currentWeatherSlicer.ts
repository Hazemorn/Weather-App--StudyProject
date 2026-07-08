import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Weather } from "../types/types";

type WeatherResponse = {
    cod: number;
    message: string;
}

type CurrentWeatherState = {
    weather: Weather | null;
    isLoading: boolean;
    response: WeatherResponse;
}

const initialState: CurrentWeatherState = {
    weather: {
        name: 'name',
        main: {
            temp: 0,
            feels_like: 0,
            temp_max: 0,
            temp_min: 0,
            humidity: 0,
        },
        wind: {
            speed: 0,
        },
        weather: {
            description: 'description',
        },
        sys: {
            country: 'country',
        },
        cod: 0,
        message: '',
    },
    isLoading: false,
    response: {
        cod: 0,
        message: '',
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<Weather>) {
            state.isLoading = false; 
            state.weather = action.payload;
            state.response = {
                cod: action.payload.cod,
                message: action.payload.message,
            };
        },
        fetchCurrentWeatherError(state, action: PayloadAction<WeatherResponse>) {
            state.isLoading = false; 
            // state.weather = null;
            state.response = {
                cod: action.payload.cod,
                message: action.payload.message,
            };
        },
    },
});

export default currentWeatherSlice.reducer;
