
// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID

// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=be32937cd0422eb04d2d2c5da8bac1ce

// icons URL  http://openweathermap.org/img/wn/10d@2x.png
// 10d - icon value from json 

//Remember to show some loading text. What if a user writes nothing in the input?

// This data should be showed in your app:
// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
// Optional a map showing where the city is located


const hundredCities = [{city:'Seoul',country:'South Korea'},
{city:'São Paulo',country:'Brazil'},
{city:'Bombay',country:'India'},
{city:'Jakarta',country:'Indonesia'},
{city:'Karachi',country:'Pakistan'},
{city:'Moscow',country:'Russia'},
{city:'Istanbul',country:'Turkey'},
{city:'Mexico City',country:'Mexico'},
{city:'Shanghai',country:'China'},
{city:'Tokyo',country:'Japan'},
{city:'New York (Ny)',country:'Usa'},
{city:'Bangkok',country:'Thailand'},
{city:'Beijing',country:'China'},
{city:'Delhi',country:'India'},
{city:'London',country:'Uk'},
{city:'Hongkong',country:'China'},
{city:'Cairo',country:'Egypt'},
{city:'Tehran',country:'Iran'},
{city:'Bogota',country:'Colombia'},
{city:'Bandung',country:'Indonesia'},
{city:'Tianjin',country:'China'},
{city:'Lima',country:'Peru'},
{city:'Rio De Janeiro',country:'Brazil'},
{city:'Lahore',country:'Pakistan'},
{city:'Bogor',country:'Indonesia'},
{city:'Santiago',country:'Chile'},
{city:'St Petersburg',country:'Russia'},
{city:'Shenyang',country:'China'},
{city:'Calcutta',country:'India'},
{city:'Wuhan',country:'China'},
{city:'Sydney',country:'Australia'},
{city:'Guangzhou',country:'China'},
{city:'Singapore',country:'Singapore'},
{city:'Madras',country:'India'},
{city:'Baghdad',country:'Iraq'},
{city:'Pusan',country:'South Korea'},
{city:'Los Angeles (Ca)',country:'Usa'},
{city:'Yokohama',country:'Japan'},
{city:'Dhaka',country:'Bangladesh'},
{city:'Berlin',country:'Germany'},
{city:'Alexandria',country:'Egypt'},
{city:'Bangalore',country:'India'},
{city:'Malang',country:'Indonesia'},
{city:'Hyderabad',country:'India'},
{city:'Chongqing',country:'China'},
{city:'Ho Chi Minh',country:'Vietnam'},
{city:'Haerbin',country:'China'},
{city:'Ankara',country:'Turkey'},
{city:'Buenos Aires',country:'Argentina'},
{city:'Chengdu',country:'China'},
{city:'Ahmedabad',country:'India'},
{city:'Casablanca',country:'Morocco'},
{city:'Chicago (Il)',country:'Usa'},
{city:'Xian',country:'China'},
{city:'Madrid',country:'Spain'},
{city:'Surabaya',country:'Indonesia'},
{city:'Pyongyang',country:'Northkorea'},
{city:'Nanjing',country:'China'},
{city:'Kinshasa',country:'Congo (Zaire)'},
{city:'Roma',country:'Italy'},
{city:'Taipei',country:'China'},
{city:'Osaka',country:'Japan'},
{city:'Kiev',country:'Ukraine'},
{city:'Yangon',country:'Myanmar'},
{city:'Toronto',country:'Canada'},
{city:'Zibo',country:'China'},
{city:'Dalian',country:'China'},
{city:'Taegu',country:'South Korea'},
{city:'Addis Ababa',country:'Ethopia'},
{city:'Jinan',country:'China'},
{city:'Salvador',country:'Brazil'},
{city:'Inchon',country:'South Korea'},
{city:'Semarang',country:'Indonesia'},
{city:'Giza',country:'Egypt'},
{city:'Changchun',country:'China'},
{city:'Havanna',country:'Cuba'},
{city:'Nagoya',country:'Japan'},
{city:'Belo Horizonte',country:'Brazil'},
{city:'Paris',country:'France'},
{city:'Tashkent',country:'Uzbekistan'},
{city:'Fortaleza',country:'Brazil'},
{city:'Sukabumi',country:'Indonesia'},
{city:'Cali',country:'Colombia'},
{city:'Guayaquil',country:'Ecuador'},
{city:'Qingdao',country:'China'},
{city:'Izmir',country:'Turkey'},
{city:'Cirebon',country:'Indonesia'},
{city:'Taiyuan',country:'China'},
{city:'Brasilia',country:'Brazil'},
{city:'Bucuresti',country:'Romania'},
{city:'Faisalabad',country:'Pakistan'},
{city:'Quezon City',country:'Philippines'},
{city:'Medan',country:'Indonesia'},
{city:'Houston (Tx)',country:'Usa'},
{city:'Abidjan',country:'Côte D’Ivorie'},
{city:'Mashhad',country:'Iran'},
{city:'Medellín',country:'Colombia'},
{city:'Kanpur',country:'India'},
{city:'Budapest',country:'Hungary'},
{city:'Caracas',country:'Venezuela'}];

const searchButton = document.getElementById("search-button");
const messageToUsser = document.getElementById("message");
const cityHeader = document.getElementById("city");
searchButton.addEventListener("click", search);

const randomButton = document.getElementById("random-city-button");
randomButton.addEventListener("click", randomCity);

defaultCity();

const weatherDiv = document.getElementById("weather-div");
const weatherIcon = document.getElementById("icon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");



function fetchWeather(weatherURL){
    fetch(weatherURL)
    .then(response => response.json())
    .then(weatherData => {
        if (weatherData.cod != 200){
            messageToUsser.innerText = "city not found!";
            defaultCity();
        }
       
        else {
            console.log(weatherData);
            const icon = weatherData.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
            weatherIcon.setAttribute("src", iconURL);
            description.innerText = weatherData.weather[0].description;
            temperature.innerText = weatherData.main.temp + " °C";
            feelsLike.innerText = "feels like: " + weatherData.main.feels_like + " °C";
            humidity.innerText = "humidity: " + weatherData.main.humidity + " %";
            windSpeed.innerText = "windspeed: " + weatherData.wind.speed + " m/s";
            sunrise.innerText = unixToTime(weatherData.sys.sunrise);
            sunset.innerText = unixToTime(weatherData.sys.sunset);
        }
    });
};


function search(){
    messageToUsser.innerText = "";
    const cityInput = document.getElementById("city-input").value;
    if (cityInput.length == 0)
      { 
         messageToUsser.innerText = "no city entered!";
         defaultCity();  	
      }
      else {
        cityHeader.innerText = cityInput.toUpperCase();
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=be32937cd0422eb04d2d2c5da8bac1ce&units=metric`;
        googleMap(cityInput);
        fetchWeather(weatherURL);}  
        document.getElementById("city-input").value = "";
	
}
function defaultCity() {
    const defaultCity = "copenhagen";
    cityHeader.innerText = defaultCity.toUpperCase();
    const defaultURL = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=be32937cd0422eb04d2d2c5da8bac1ce&units=metric`;
    googleMap(defaultCity);
    fetchWeather(defaultURL);
}


function randomCity(){
    messageToUsser.innerText = "";
    const random = Math.floor(Math.random() * 100) + 1;
    const randomCity = hundredCities[random].city;
    const country = hundredCities[random].country;
    const countrySpan = document.createElement("span");
    countrySpan.innerText = `, ${country}`;
    cityHeader.innerText = randomCity.toUpperCase();
    cityHeader.appendChild(countrySpan);
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=be32937cd0422eb04d2d2c5da8bac1ce&units=metric`;
    googleMap(randomCity);
    fetchWeather(weatherURL);
}

function unixToTime(unix){
    // it does not take into account the timezone :/
    const date = new Date(unix * 1000);
    const time = date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();
    return time;
}

function googleMap(mapCity){
    const mapCityURL = `https://maps.google.com/maps?q=${mapCity}&t=&z=9&ie=UTF8&iwloc=&output=embed`;
    document.getElementById("gmap_canvas").src = mapCityURL;
}


