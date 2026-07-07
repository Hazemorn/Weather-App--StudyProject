import type { Weather, WeatherResponse } from "../store/types/types";

const apiKey = import.meta.env.VITE_API_KEY;



export class WeatherService {
    static async getCurrentWeather(city: string,  unit: string): Promise< Weather | WeatherResponse > {
        const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        try {
            const response = await fetch(query);
            if(!response.ok) {
                const weatherResponseError: WeatherResponse = await response.json();
                const weatherError: WeatherResponse = {
                    cod: weatherResponseError.cod,
                    message: weatherResponseError.message,
                } 
                return weatherError;
            }
            
            const weatherResponse: Weather = await response.json();
            const weatherInfo: Weather = {
                name: weatherResponse.name,
                main: {
                    temp: weatherResponse.main.temp,
                    feels_like: weatherResponse.main.feels_like,
                    temp_max: weatherResponse.main.temp_max,
                    temp_min: weatherResponse.main.temp_min,
                    humidity: weatherResponse.main.humidity,
                },
                wind: {
                    speed: weatherResponse.wind.speed,
                },
                weather: {
                    description: weatherResponse.weather[0].description,
                },
                sys: {
                    country: weatherResponse.sys.country,
                },
                cod: weatherResponse.cod,
            }
            return weatherInfo;
        } catch (err: any) {
            console.log("Error:", err.message);
            return undefined;
        }
    }
}
export default WeatherService;