export type WeatherResponse = {
    cod: number;
    message: string;
}

type WeatherMain = {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
}

export type Weather = {
    name: string;
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
    cod: number;
    message?: string;
};

