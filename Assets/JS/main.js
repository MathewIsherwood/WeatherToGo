function getAllParameters(weatherData) {
    return weatherData.parameters;
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

function getAllWeatherHours(weatherData) {
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

// Fetch request to get weather data from the API
function updateWeatherHour(lat,long) {
    // getCurrentLocation();

    const url = `https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/hourly`;
    const apikey = `eyJ4NXQjUzI1NiI6Ik5XVTVZakUxTkRjeVl6a3hZbUl4TkdSaFpqSmpOV1l6T1dGaE9XWXpNMk0yTWpRek5USm1OVEE0TXpOaU9EaG1NVFJqWVdNellXUm1ZalUyTTJJeVpBPT0iLCJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ==.eyJzdWIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb21AY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJtb2d0aGVtb3NxdWl0b0BnbWFpbC5jb20iLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMDViNTQ1ODAtYWYwZS00ZmJjLWI1ZjMtMmE5ZmViOWVlYjdjIiwiaWQiOjkzMzEsInV1aWQiOiI1NDgxMTc1Mi01NjlkLTQ4MWMtODU2Ny1iYTVhN2RlZGIzMzIifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3Mzg2NjU1MTksImp0aSI6IjlmMDQ2MWJiLWFmODctNDc3MC1hYzRhLTMxN2RiODE1NjQxYyJ9.AEFlnjZrvfSlDBzGF90mZb5hH9yXQ-RLkNKBzOOJOs-tKJctS05iLIgL0SjlohsskiYhLphVG4tZ4qgqnR2X97mGjXjtzYALoaDQYI1IBXBN9MEAIdoqhPAMghzlkgOSzjyc7_NpB8pALsqOzHVdediOr4TVmQv04lEfwpPs8Lp2ALByGadWDzSBBzN-qLktCjRS0H-oHDCC2qHoKTF-p3svvyvah9hCWTG-HaWK1JcsEpAPIqD-uu2KtOxkSUq097WPKpNno1dybsISx6uBZSVeP7ejP0sH16omqk03fPHAgNv9aE5buhmTkCQDO46X-VBk_zmF9BNtqTbNUkes3g==`;

    if(lat === undefined || long === undefined) {
        lat = 52.5;
        long = -1.9;
    }

    //fetch written by AI
    fetch(`${url}?latitude=${lat}&longitude=${long}`, {
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
        const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), getAllWeatherHours(data));
        
        setTemperatureTextArea(currentWeatherHour);
        setUVIndexTextArea(currentWeatherHour);

    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

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

function setTemperatureTextArea(weatherHour) {
    const temperature = Math.floor(weatherHour.screenTemperature).toString() + "°C";
    document.getElementsByClassName("TemperatureTextArea")[0].innerText = temperature;
}

function setUVIndexTextArea(weatherHour) {
    const uvIndex = "UV Index: " + weatherHour.uvIndex.toString();
    document.getElementsByClassName("UVIndexTextArea")[0].innerText = uvIndex;
}

// const text-blue-500; // Coldest
// const text-cyan-500; // Cold
// const text-sky-500; // OK
// const text-yellow-500; // Nice
// const text-orange-500; // Bit Warm
// const text-red-500; // Really Warm


function loadingScreen() {
    const iconDisplayArea = document.getElementById('IconDisplayArea');
    iconDisplayArea.innerHTML = `
        <div class="IconDisplayArea bg-white p-6 rounded-lg shadow-lg">
            <h2>Loading...</h2>
            <div class="loadingbaby">
                <img src="Assets/Images/loadingbaby.jpg" alt="Loading...">
            </div>
        </div>
    `;
}

// const allWeatherHours = getAllWeatherHours(bristolData);
// console.log(getOneWeatherHour(getCurrentHourISO(), allWeatherHours));

// const parameters = getAllParameters(bristolData);
// const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), allWeatherHours);

// setTemperatureTextArea(currentWeatherHour);
// setUVIndexTextArea(currentWeatherHour);

// getCurrentLocation();


// updateWeatherHour(52.5,-1.9);