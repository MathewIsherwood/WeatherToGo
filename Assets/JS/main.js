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
    textTime = textTime.slice(0,22);

    //slice the minutes
    let roundHours = Number(textTime.slice(14,16));

    //decimalise minutes, round to nearest hour
    roundHours /= 60;
    roundHours = Math.round(roundHours);
    
    if(roundHours === 1) {
        let currentHour = Number(textTime.slice(11,13));
        let nextHour = currentHour + 1;
        
        textTime = textTime.replace(currentHour,nextHour);
    }

    textTime = textTime.slice(0,14) + '00Z';
    return textTime;
}

const allWeatherHours = getAllWeatherHours(bristolData);
console.log(getOneWeatherHour(getCurrentHourISO(), allWeatherHours));


text-blue-500 // Coldest
text-cyan-500 // Cold
text-sky-500 // OK
text-yellow-500 // Nice
text-orange-500 // Bit Warm
text-red-500 // Really Warm


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