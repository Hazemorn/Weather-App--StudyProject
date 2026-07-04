import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCity, getWeather} from  "../../services/getWeather.ts";
import type {Weather} from "../../services/getWeather.ts";

interface FetchWeatherArgs {
    cityName: string;
    unit: 'metric' | 'imperial'; 
  }


  export const fetchWeatherByCity = createAsyncThunk<
        Weather,               
        FetchWeatherArgs,      
        { rejectValue: string } 
    >(
  "weather/fetchByCity",
  async ({ cityName, unit }, thunkAPI) => {
    try {
      const cityInfo = await getCity(cityName);

      if (!cityInfo) {
        return thunkAPI.rejectWithValue("City not found or request failed");
      }

      const weatherInfo = await getWeather(cityInfo.lat, cityInfo.lon, unit);

      if (!weatherInfo) {
        return thunkAPI.rejectWithValue("Failed to load weather data");
      }
      return weatherInfo;

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "An unexpected error occurred");
    }
  }
);