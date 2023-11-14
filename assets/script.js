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
function getWeather(cityName){
    
};

// Populate the current weather container

// Populate the 5 day forecast container 

// Add input values to search history container

// Store searched cities to local storage

// Update page to retrieve local storage to display on search history