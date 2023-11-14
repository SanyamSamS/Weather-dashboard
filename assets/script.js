var apiKey = '7de3e02a820c4d9f951047e7cc7de03b'; 
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

var searchInput = document.getElementById('city-input');
var searchBtn = document.getElementById('search-btn');
var currentWeatherContainer = document.getElementById('current-weather');
var forecastContainer = document.getElementById('forecast');
var searchHistoryContainer = document.getElementById('search-history-list');
