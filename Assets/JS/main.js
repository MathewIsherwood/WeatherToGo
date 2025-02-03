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

const allWeatherHours = getAllWeatherHours(bristolData);
// const parameters = getAllParameters(bristolData);
const currentWeatherHour = getOneWeatherHour(getCurrentHourISO(), allWeatherHours);

setTemperatureTextArea(currentWeatherHour);
setUVIndexTextArea(currentWeatherHour);