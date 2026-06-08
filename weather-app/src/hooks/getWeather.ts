const apiKey = import.meta.env.VITE_API_KEY;

interface CityData {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
}

export interface Weather {
    main: WeatherMain;
    wind: {
        speed: number;
    };
    weather: {
        description: string;
    };
    sys: {
        country: string;
    };
}

const getCity = async (): Promise<CityData | undefined> =>  {
    const city =`http://api.openweathermap.org/geo/1.0/direct?q={London}&appid=${apiKey}`;
    try {
        const response = await fetch(city);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
        const data: CityData[] = await response.json();

        if (!data || data.length === 0) {
            throw new Error("City not found");
        }

        const cityInfo: CityData = {
            name: data[0].name,
            lat: data[0].lat,
            lon: data[0].lon,
            country: data[0].country
        };
        return cityInfo;
    } catch (err: any) {
        console.log("Error:", err.message);
        return undefined;
    }
}


const getWeather = async (lat: number, lon: number): Promise< Weather | undefined > => {
    const query = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(query);
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const weatherData: Weather = await response.json();
        const weatherInfo: Weather = {
            main: {
                temp: weatherData.main.temp,
                feels_like: weatherData.main.feels_like,
                temp_max: weatherData.main.temp_max,
                temp_min: weatherData.main.temp_min,
                humidity: weatherData.main.humidity,
            },
            wind: {
                speed: weatherData.wind.speed,
            },
            weather: {
                description: weatherData.weather[0].description,
            },
            sys: {
                country: weatherData.sys.country,
            }
        }
        return weatherInfo;
    } catch (err: any){
        console.log("Error:", err.message);
        return undefined;
    }
    
}

export { getCity, getWeather};