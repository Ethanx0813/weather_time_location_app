document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const searchButton = document.getElementById("search-button");
    const cityNameElement = document.getElementById("city-name");
    const cityTimeElement = document.getElementById("city-time");
    const cityTempElement = document.getElementById("city-temp");

    async function getWeatherData(cityName) {
        try {
            const apiKey = '5fdc3024bfb04f95b04120512230110';
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`);
            const result = await response.json();

            cityNameElement.textContent = `City: ${result.location.name}, ${result.location.country}`;
            cityTimeElement.textContent = `Local Time: ${result.location.localtime}`;
            cityTempElement.textContent = `Temperature: ${result.current.temp_c}°C`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    function searchCity() {
        const cityName = cityInput.value.trim();

        if (cityName !== "") {
            getWeatherData(cityName);
        } else {
            alert("Please enter a city name.");
        }
    }

    searchButton.addEventListener('click', searchCity);
});
