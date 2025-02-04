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

