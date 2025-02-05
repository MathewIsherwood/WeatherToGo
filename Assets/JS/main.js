function getAllParameters(weatherData) {
    return weatherData.parameters;
}

function getAPIKey() {
    return `eyJ4NXQjUzI1NiI6Ik5XVTVZakUxTkRjeVl6a3hZbUl4TkdSaFpqSmpOV1l6T1dGaE9XWXpNMk0yTWpRek5USm1OVEE0TXpOaU9EaG1NVFJqWVdNellXUm1ZalUyTTJJeVpBPT0iLCJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ==.eyJzdWIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMDViNTQ1ODAtYWYwZS00ZmJjLWI1ZjMtMmE5ZmViOWVlYjdjIiwiaWQiOjkzMzEsInV1aWQiOiI1NDgxMTc1Mi01NjlkLTQ4MWMtODU2Ny1iYTVhN2RlZGIzMzIifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3Mzg2NjU1MTksImp0aSI6IjlmMDQ2MWJiLWFmODctNDc3MC1hYzRhLTMxN2RiODE1NjQxYyJ9.AEFlnjZrvfSlDBzGF90mZb5hH9yXQ-RLkNKBzOOJOs-tKJctS05iLIgL0SjlohsskiYhLphVG4tZ4qgqnR2X97mGjXjtzYALoaDQYI1IBXBN9MEAIdoqhPAMghzlkgOSzjyc7_NpB8pALsqOzHVdediOr4TVmQv04lEfwpPs8Lp2ALByGadWDzSBBzN-qLktCjRS0H-oHDCC2qHoKTF-p3svvyvah9hCWTG-HaWK1JcsEpAPIqD-uu2KtOxkSUq097WPKpNno1dybsISx6uBZSVeP7ejP0sH16omqk03fPHAgNv9aE5buhmTkCQDO46X-VBk_zmF9BNtqTbNUkes3g==`;
}

// function getParameterSymbolText(parameterName, allParameters) {
//     for (let parameter of allParameters) {
//         if (parameter.name === parameterName) {
//             return parameter.unit.symbol.type;
//         }
//     }

//     //error handling return here.
// }

//geolocation api service - w3schools
function getCurrentLocation() {
    let currentLocationObj = {};
    if (navigator.geolocation) {
        currentLocationObj = navigator.geolocation.getCurrentPosition(usePosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    console.log(currentLocationObj);
}

function usePosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;


}

//geolocation error handling - w3schools
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

function getAllWeatherTimes(weatherData) {
    return weatherData.features[0].properties.timeSeries;
}

function getOneWeatherHour(dateTime, weatherData) {
    for (let weatherHour of weatherData) {
        if (weatherHour.time === dateTime) {
            return weatherHour;
        }
    }

    //error handling return here.
}

// Fetch request to get hourly weather data from the API.
// Optional parameter longlat, if a longitude and latitude object
// aren't provided, then the function will fetch the longlat from location name
function updateWeatherHour(townName, longlat = 0) {
    const weatherTime = "hourly";

    if (longlat === 0) {
        getLongLat(townName, weatherTime);
    } else {
        setWeather(weatherTime, longlat);
    }
}

// Fetch request to get daily weather data from the API.
// Optional parameter longlat, if a longitude and latitude object
// aren't provided, then the function will fetch the longlat from location name
function updateWeatherDaily(townName, longlat = 0) {
    const weatherTime = "daily";

    if (longlat === 0) {
        getLongLat(townName, weatherTime);
    } else {
        setWeather(weatherTime, longlat);
    }
}

//get long - lat for places in the uk based on the name of the place
function getLongLat(placeName, weatherTime) {
    const url = `https:api.postcodes.io/places?query=${placeName}`;
    let long = 0;
    let lat = 0;
    console.log('Fetching URL:', url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.result.length; i++) {
                if (data.result[i].local_type == "Town" || data.result[i].local_type == "City") {
                    //console.log(`Place: ${data.result[i].name_1}, Longitude: ${data.result[i].longitude}, Latitude: ${data.result[i].latitude}`);
                    long = parseFloat(data.result[i].longitude).toFixed(4);
                    lat = parseFloat(data.result[i].latitude).toFixed(4);
                    let longLatObj = { "long": long, "lat": lat };

                    // console.log(longLatObj);
                    setWeather(weatherTime, longLatObj);
                    
                    break;
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function setWeather(weatherTime, longlat) {
    const url = `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/${weatherTime}`;
    const apikey = getAPIKey();

    //fetch written by AI
    fetch(`${url}?latitude=${longlat.long}&longitude=${longlat.lat}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'apikey': apikey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process the weather data here
            if(weatherTime === "hourly") {
                const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), getAllWeatherTimes(data));

                setTemperatureTextArea(currentWeatherHour);
                setUVIndexTextArea(currentWeatherHour);
                setWeatherDescriptionAndIcon(currentWeatherHour);
            } else if (weatherTime === "daily") {
                const allWeatherDays = getAllWeatherTimes(data);

                setFiveDayTemperatureTextArea(allWeatherDays);
                setFiveDayWeatherDescriptionAndIcon(allWeatherDays);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Fetch request to get daily weather data from the API
/*function updateWeatherDaily(townName, longlat = 0) {
    const url = `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/daily`;
    const apikey = getAPIKey();

    getLongLat(longlat).then(
        function (value) {
            longlat = value;
        }
    );

    // let longlat = getLongLat(townName);
    // if (longlat === undefined) {
    //     console.log("Location not found, defaulting to Bristol");
    //     longlat = [51.4545, -2.5879];
    // }

    //fetch written by AI
    fetch(`${url}?latitude=${longlat.long}&longitude=${longlat.lat}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'apikey': apikey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process the weather data here
            const allWeatherDays = getAllWeatherTimes(data);

            setFiveDayTemperatureTextArea(allWeatherDays);
            setFiveDayWeatherDescriptionAndIcon(allWeatherDays);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}*/

// get the current hour (rounded to nearest hour) in ISO format
function getCurrentHourISO() {
    const currentTime = new Date();
    let textTime = currentTime.toISOString();
    //remove 'Z'
    textTime = textTime.slice(0, 22);

    //slice the minutes
    let roundHours = Number(textTime.slice(14, 16));

    //decimalise minutes, round to nearest hour
    roundHours /= 60;
    roundHours = Math.round(roundHours);

    //add the rounded hours back in tp ISO format
    if (roundHours === 1) {
        let currentHour = Number(textTime.slice(11, 13));
        let nextHour = currentHour + 1;

        textTime = textTime.replace(currentHour, nextHour);
    }

    //add 'Z' back in to match ISO standards for successful comparison.
    textTime = textTime.slice(0, 14) + '00Z';
    return textTime;
}

/**
 * Current hour forecast section
 */
function setTemperatureTextArea(weatherHour) {
    const temperature = Math.floor(weatherHour.screenTemperature).toString() + "°C";
    document.getElementsByClassName("TemperatureTextArea")[0].innerText = temperature;
}

function setUVIndexTextArea(weatherHour) {
    const uvIndex = "UV Index: " + weatherHour.uvIndex.toString();
    document.getElementsByClassName("UVIndexTextArea")[0].innerText = uvIndex;
}

function setWeatherDescriptionAndIcon(weatherHour) {
    const weatherInfo = getWeatherDescriptionAndIcon(weatherHour.significantWeatherCode);
    document.getElementById("BottomTextArea").innerText = weatherInfo.description;
    document.getElementById("MainIcon").src = weatherInfo.icon;
    document.getElementById("MainIcon").innerHTML = `<img src="${weatherInfo.icon}" alt="Weather Icon">`;
}
/**
 * Five Day Forecast section
 */
function setFiveDayTemperatureTextArea(weatherDays) {
    //loop for five days of data, exit out on sixth iteration
    //we skip the zeroith in the array, as that is yesterday's data
    let temperature = "";
    for (let i = 1; i < 6; i++) {
        temperature = Math.floor(weatherDays[i].dayMaxScreenTemperature).toString() + "°C";
        //TODO: currently the dom is on index.html, not 5dayforecast.html
        document.getElementsByClassName(`Day${i}Temp`)[0].innerText = temperature;
    }
}

function setFiveDayWeatherDescriptionAndIcon(weatherDays) {
    //loop for five days of data, exit out on sixth iteration
    //we skip the zeroith in the array, as that is yesterday's data
    let weatherInfo = "";
    for (let i = 1; i < 6; i++) {
        weatherInfo = getWeatherDescriptionAndIcon(weatherDays[i].daySignificantWeatherCode);
        //TODO: currently the dom is on index.html, not 5dayforecast.html
        document.getElementsByClassName(`Day${i}Weather`)[0].innerText = weatherInfo.description;
        document.getElementsByClassName(`Day${i}Icon`)[0].src = weatherInfo.icon;
    }
}

// const text-blue-500; // Coldest
// const text-cyan-500; // Cold
// const text-sky-500; // OK
// const text-yellow-500; // Nice
// const text-orange-500; // Bit Warm
// const text-red-500; // Really Warm

function getWeatherDescriptionAndIcon(weatherCode) {
    console.log("weatherCode"+weatherCode);
    const weatherMap = {
        0: { description: "Clear night", icon: "Assets/Images/clear_moon_night.png" },
        1: { description: "Sunny", icon: "Assets/Images/sunny.png" },
        2: { description: "Partly cloudy night", icon: "Assets/Images/cloudy_night.png" },
        3: { description: "Partly cloudy", icon: "Assets/Images/cloudy_sun" },
        5: { description: "Mist", icon: "Assets/Images/fogy.png" },
        6: { description: "Fog", icon: "Assets/Images/fogy.png" },
        7: { description: "Cloudy", icon: "Assets/Images/cloudy.png" },
        8: { description: "Overcast", icon: "Assets/Images/cloudy.png" },
        9: { description: "Light rain shower", icon: "Assets/Images/lightrainday.png" },
        10: { description: "Light rain shower", icon: "Assets/Images/lightrainnight.png" },
        11: { description: "Drizzle", icon: "Assets/Images/rain.png" },
        12: { description: "Light rain", icon: "Assets/Images/lightrainday.png" },
        13: { description: "Heavy rain shower", icon: "Assets/Images/heavyrainnight.png" },
        14: { description: "Heavy rain shower", icon: "Assets/Images/heavyrain.png" },
        15: { description: "Heavy rain", icon: "Assets/Images/windy.png" },
        16: { description: "Sleet shower", icon: "Assets/Images/sleet.png" },
        17: { description: "Sleet shower", icon: "Assets/Images/sleet.png" },
        18: { description: "Sleet", icon: "Assets/Images/sleet.png" },
        19: { description: "Hail shower", icon: "Assets/Images/hailshowernight.png" },
        20: { description: "Hail shower", icon: "Assets/Images/hailshower.png" },
        21: { description: "Hail", icon: "Assets/Images/hail.png" },
        22: { description: "Light snow shower", icon: "Assets/Images/snow.png" },
        23: { description: "Light snow shower", icon: "Assets/Images/snow.png" },
        24: { description: "Light snow", icon: "Assets/Images/snow.png.png" },
        25: { description: "Heavy snow shower", icon: "Assets/Images/snow.png" },
        26: { description: "Heavy snow shower", icon: "Assets/Images/snow.png" },
        27: { description: "Heavy snow", icon: "Assets/Images/snow.png" },
        28: { description: "Thunder shower", icon: "Assets/Images/thundershowernight.png" },
        29: { description: "Thunder shower", icon: "Assets/Images/thundershower.png" },
        30: { description: "Thunder", icon: "Assets/Images/thunder.png"}
    };
    return weatherMap[weatherCode] || { description: "Unknown", icon: "Assets/Images/unknown.png" };
}

function loadingScreen() {
    const iconDisplayArea = document.getElementById('IconDisplayArea');
    iconDisplayArea.innerHTML = `
        <div class="IconDisplayArea bg-white p-6 rounded-lg shadow-lg">
            <h2>Loading...</h2>
            <div class="loadingbaby">
                <img src="Assets/Images/loadingbaby.jpg" alt="Loading...">
            </div>
            <div class="WeatherDescription"></div>
            <img class="WeatherIcon" src="" alt="Weather Icon">
        </div>
    `;
}


//html input box for placename refreshed upon keypress or submit button click
const placeName = document.getElementById('placeName');
placeName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        updateWeatherHour(placeName.value);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                let userAnswer = (document.getElementById("placeName").value).toString();
                updateWeatherHour(userAnswer);
            } else {
                ErrorEvent("Unknown place submitted");
            }
        });
    }
});

 updateWeatherHour("Burnley");


// Toggle between GPS and Location Search

document.getElementById('toggleButton').addEventListener('click', function () {
    var searchbar = document.getElementById('searchbar');
    var gpsLocation = document.getElementById('GPSlocation');
    if (searchbar.style.display === 'none') {
        searchbar.style.display = 'flex';
        gpsLocation.style.display = 'none';
    } else {
        searchbar.style.display = 'none';
        gpsLocation.style.display = 'flex';
    }
});
// Initialize with searchbar visible and GPS location hidden
document.getElementById('searchbar').style.display = 'flex';
document.getElementById('GPSlocation').style.display = 'none';

// Switch background colour based on weather condition
function switchBackgroundColour(weatherCondition) {
    switch (weatherCondition) {
        case 'Coldest':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourColdest';
            break;
        case 'Cold':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourCold';
            break;
        case 'OK':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourOK';
            break;
        case 'Nice':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourNice';
            break;
        case 'BitWarm':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourBitWarm';
            break;
        case 'ReallyWarm':
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColourReallyWarm';
            break;
        default:
            document.getElementById('primarybackground').className = 'TemperatureBackgroundColour';
            break;
    }
}