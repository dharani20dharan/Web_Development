const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const errorMsg = document.getElementById("error-message");
const weatherCard = document.getElementById("weather-card");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    displayError("Please enter a city name.");
  }
});

cityInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

async function fetchWeather(city) {
  // Using wttr.in for weather data in JSON format
  const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("City not found");
    }

    const data = await res.json();
    updateWeatherUI(data);
  } catch (error) {
    displayError("City not found. Please try another.");
  }
}

function updateWeatherUI(data) {
  const currentCondition = data.current_condition[0];
  const nearestArea = data.nearest_area[0];

  document.getElementById("city-name").textContent = `📍 ${nearestArea.areaName[0].value}, ${nearestArea.country[0].value}`;
  document.getElementById("temperature").textContent = `${currentCondition.temp_C}°C`;
  document.getElementById("description").textContent = currentCondition.weatherDesc[0].value;
  document.getElementById("humidity").textContent = `Humidity: ${currentCondition.humidity}%`;
  document.getElementById("wind").textContent = `Wind: ${currentCondition.windspeedKmph} km/h`;

  // wttr.in does not provide a direct icon URL in the same way OpenWeatherMap does.
  // We will display the weather description as a prominent visual element.
  // For a more visual representation, you could map weather descriptions to your own icons.
  document.getElementById("weather-icon").style.display = 'none'; // Or set a default/mapped icon

  weatherCard.classList.remove("hidden");
  errorMsg.classList.add("hidden");
}

function displayError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
  weatherCard.classList.add("hidden");
}