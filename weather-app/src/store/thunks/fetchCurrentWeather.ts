import type { AppDispatch } from "../store";
import WeatherService from "../../services/getWeather";
import { currentWeatherSlice } from "../slices/currentWeatherSlicer";
import type { Weather, WeatherResponse } from "../types/types";

export const fetchCurrentWeather = (payload: string, unit: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
    const weatherRes = await WeatherService.getCurrentWeather(payload, unit); 
    if (Number(weatherRes.cod) === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(weatherRes as Weather))
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(weatherRes as WeatherResponse))
    }
  } catch (error) {
    console.log(error);
  }
  
}


