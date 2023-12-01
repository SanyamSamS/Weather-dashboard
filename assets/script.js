var apiKey = '7de3e02a820c4d9f951047e7cc7de03b'; 
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

var searchInput = document.getElementById('city-input');
var searchBtn = document.getElementById('search-btn');
var currentWeatherContainer = document.getElementById('current-weather');
var forecastContainer = document.getElementById('forecast');
var searchHistoryContainer = document.getElementById('search-history-list');

// Search bar
searchBtn.addEventListener('click', function () {
    // Retrieve input from the search bar value
    var cityName = searchInput.value.trim();

    if (cityName !== '') {
        getWeather(cityName);
    }
    console.log(cityName);
});



// Use input value to get lon and lat for api call
function getCoordinates(cityName){  
    var geocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    fetch(geocodingApiUrl)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error fetching coordinates:', error));
};

// Populate the current weather container
function displayCurrentWeather(data) {
    currentWeatherContainer.innerHTML = `
    <h2>${currentWeather.weather[0].description}</h2>
    <p>Temperature: ${currentWeather.temp}°C</p>
    <p>Humidity: ${currentWeather.humidity}%</p>
`;
}

// Populate the 5 day forecast container 
function displayForecast(data) {
    forecastContainer.innerHTML = '';
    dailyForecast.forEach(day => {
        forecastContainer.innerHTML += `
            <div>
                <h3>${day.weather[0].description}</h3>
                <p>Temperature: ${day.temp.day}°C</p>
                <p>Humidity: ${day.humidity}%</p>
            </div>
        `;
    });
}

// Add input values to search history container
function addSearchHistory(data) {
    var listItem = document.createElement('li');
    listItem.textContent = cityName;
    searchHistoryContainer.appendChild(listItem);
}

// Store searched cities to local storage
function storeCity(data) {

}

// Update page to retrieve local storage to display on search history
