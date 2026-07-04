import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Weather } from "../../services/getWeather";
import { fetchWeatherByCity } from "../thunks/fetchCurrentWeather"; 


type WeatherResponse = {
    status: number;
    message: string;
}

type CurrentWeatherState = {
    weather: Weather | null; 
    isLoading: boolean;
    response: WeatherResponse;
}

const initialState: CurrentWeatherState = {
    weather: null,
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        clearWeatherData(state) {
            state.weather = null;
            state.response = { status: 0, message: '' };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherByCity.pending, (state) => {
                state.isLoading = true;
                state.response = { status: 0, message: '' }; 
            })
            
            .addCase(fetchWeatherByCity.fulfilled, (state, action: PayloadAction<Weather>) => {
                state.isLoading = false;
                state.weather = action.payload; 
                state.response = { status: 200, message: 'Success' };
            })
            .addCase(fetchWeatherByCity.rejected, (state, action) => {
                state.isLoading = false;
                state.weather = null;
                state.response = {
                    status: 404,
                    message: action.payload as string || 'Failed to fetch weather',
                };
            });
    }
});

export const { clearWeatherData } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
