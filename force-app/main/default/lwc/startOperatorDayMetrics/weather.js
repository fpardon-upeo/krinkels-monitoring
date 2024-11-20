export class Weather {
    constructor() {
        this.baseUrl = "http://api.weatherapi.com/v1/forecast.json";
        this.apiKey = "863c34128167414a8ef192250241911";
    }

    async getNextHourForecast(lat, lon) {
        const url = `${this.baseUrl}?key=${this.apiKey}&q=${lat},${lon}&hours=1`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API call failed: ${response.statusText}`);
            }
            const data = await response.json();

            console.log(data);

            // Extract the forecast for the next hour
            const currentTime = new Date();
            const nextHour = new Date(currentTime.getTime() + 60 * 60 * 1000).getHours();
            const forecastHour = data.forecast.forecastday[0].hour.find(
                (hour) => new Date(hour.time).getHours() === nextHour
            );

            console.log(forecastHour);

            return {
                temperature: forecastHour.temp_c,
                condition: forecastHour.condition.text,
                icon: `https:${forecastHour.condition.icon}`,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    }
}