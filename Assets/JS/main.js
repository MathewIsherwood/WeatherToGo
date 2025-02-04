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

    if (roundHours === 1) {
        let currentHour = Number(textTime.slice(11, 13));
        let nextHour = currentHour + 1;

        textTime = textTime.replace(currentHour, nextHour);
    }

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

function setWeatherDescriptionAndIcon(weatherHour) {
    const weatherInfo = getWeatherDescriptionAndIcon(weatherHour.SignificantWeatherCode);
    document.getElementsByClassName("WeatherDescription")[0].innerText = weatherInfo.description;
    document.getElementsByClassName("WeatherIcon")[0].src = weatherInfo.icon;
}

// const text-blue-500; // Coldest
// const text-cyan-500; // Cold
// const text-sky-500; // OK
// const text-yellow-500; // Nice
// const text-orange-500; // Bit Warm
// const text-red-500; // Really Warm

function getWeatherDescriptionAndIcon(weatherCode) {
    const weatherMap = {
        0: { description: "Clear", icon: "Assets/images/clear_moon_night.png" },
        1: { description: "Partly Cloudy", icon: "Assets/Images/Assets/Images/cloudy_sunny.png" },
        2: { description: "Cloudy", icon: "Assets/ImagesAssets/Images/cloudy.png" },
        3: { description: "Rain", icon: "Assets/Images/Assets/Images/rain.png" },
        7: { description: "Snow", icon: "Assets/Images/Assets/Images/snow.png" },
        8: { description: "Thunderstorm", icon: "Assets/Images/storm_thunder.png" },
        12: { description: "Fog", icon: "Assets/Images/fogy.png" },
        15: { description: "Windy", icon: "Assets/Images/windy.png" },
        20: { description: "windy_cloud", icon: "assets/images/cloudy_windy.png" },
        21: { description: "windy_rain", icon: "Assets/Images/coud_sunny.png" },
        22: { description: "sun", icon: "assets/images/sun.png" },
        23: { description: "sunset", icon: "assets/images/sunset.png" },
        24: { description: "sunraise", icon: "assets/images/sunraise.png" },
        25: { description: "umbderella", icon: "assets/images/umbrella.png" },
        26: { description: "cloud_sun_storm", icon: "assets/images/cloudy_storm.png" },
        27: { description: "cloud_sun_rain", icon: "assets/images/cloudy_rain.png" },
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

const allWeatherHours = getAllWeatherHours(bristolData);
console.log(getOneWeatherHour(getCurrentHourISO(), allWeatherHours));

// const parameters = getAllParameters(bristolData);
const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), allWeatherHours);

setTemperatureTextArea(currentWeatherHour);
setUVIndexTextArea(currentWeatherHour);
setWeatherDescriptionAndIcon(currentWeatherHour);