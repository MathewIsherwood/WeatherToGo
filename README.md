# Weather To Go

## Contents
- [Project Overview](#project-overview)
- [Goals](#goals)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Styles](#styles)
- [Images](#images)
- [Dependencies](#dependencies)
- [AI Usage](#ai-usage)
- [How to Run / Deployment](#how-to-run--deployment)
- [Contributing](#contributing)
- [License](#license)
- [Manual Tests](#manual-tests)
- [Validator Testing](#validator-testing)
- [Known Bugs}(#known-bugs)



## Project Overview

Weather To Go is a single-page application designed to provide users with real-time weather updates and forecasts for different locations. The application allows users to check the current weather, receive weather alerts, and get clothing suggestions based on the weather conditions.

# Purpose
The purpose of Weather To Go is to help users plan their day by providing accurate and timely weather information. 
Whether you need an umbrella or just want to grab your sunglasses, this tool ensures you are prepared for the weather conditions.

### User Value and Benefits
- **Real-time Weather Updates**: Users can get the latest weather information for their current location or any other location they choose.
- **Weather Alerts**: The application provides alerts for specific weather conditions, helping users prepare for rain, snow, or extreme temperatures.
- **Clothing Suggestions**: Based on the weather forecast, users receive suggestions on what to wear, ensuring they are dressed comfortably for the day.
- **Interactive Forecasts**: Users can view hourly and daily weather forecasts, allowing them to plan ahead for the day or week.
- **Location Flexibility**: Users can easily switch between GPS-based location tracking and manual location search to get weather updates for different areas.


[Back to Contents](#contents)

## Goals

- **Provide Accurate Weather Information**: Ensure users have access to real-time weather updates for their current location or any location they choose.
- **Enhance User Preparedness**: Help users prepare for the day by providing weather alerts and clothing suggestions based on the forecast.
- **Improve User Experience**: Create an intuitive and user-friendly interface that allows users to easily navigate and access weather information.
- **Support Location Flexibility**: Allow users to switch between GPS-based location tracking and manual location search to get weather updates for different areas.
- **Interactive Forecasts**: Offer interactive hourly and daily weather forecasts to help users plan ahead for the day or week.
- **Seamless Integration**: Ensure the application integrates smoothly with various devices and platforms for a consistent user experience.

[Back to Contents](#contents)

## User Stories



- **Current Weather**: As a user, I want to see the current weather at my location so that I can quickly assess the conditions outside.
- **Weather Alerts**: As a user, I want to be alerted if I need specific items like an umbrella, sunscreen, or a jacket based on the weather forecast so that I can prepare appropriately before heading out.
- **Clothing Suggestions**: As a user, I want to receive suggestions for what to wear based on the weather, so I can dress comfortably for the day.
- **Forecast Access**: As a user, I want to see hourly or daily weather forecasts so I can plan ahead for the day or week, ensuring I bring the right items.
- **Location Input**: As a user, I want to have the option to enter a different location and get weather recommendations for that area, in case I’m traveling or want to check the weather elsewhere.


[Back to Contents](#contents)

## Wireframes

### Mockups Overview
Mockups provide a detailed alignment that includes colors, fonts, images, and other elements, reflecting the final product more closely.

1. **Home Screen Wireframe**
   - **Description**: The landing page displays the current weather conditions, with a large temperature display, icons for conditions (e.g., sunny, rainy), and a location input/search bar at the top.
   - **Changes Made**: Initially included a multi-tab layout, which was simplified to a single scrollable page for better user experience and to avoid overwhelming the user.

2. **Weather Alert Clothing Wireframe**
   - **Description**: This screen shows alerts for necessary items (umbrella, sunscreen, jacket) based on the current weather. Each item has a checkbox for user acknowledgment.
   - **Changes Made**: The initial version contained only text-based suggestions, but switching to visual representation helped users gravitate more towards recommended outfits.

3. **Clothing Suggestions Screen Wireframe**
   - **Description**: Users receive personalized clothing suggestions based on weather conditions, with images of outfits for better visual guidance.
   - **Changes Made**: The initial concept of a static list view was replaced with an interactive format for more engaging user interaction.

4. **Hourly/Daily Forecast Screen Wireframe**
   - **Description**: Displays an interactive forecast graph with hourly/daily segments, allowing users to swipe between forecasts easily.
   - **Changes Made**: The initial concept of a static list view was replaced with an interactive format for more engaging user interaction.

5. **Location Input and Selection Screen Wireframe**
   - **Description**: A dedicated section where users can enter or select locations for weather updates, featuring a search bar and a list of saved locations.
   - **Changes Made**: The initial design was simplified to make location input and selection more intuitive and user-friendly.


[Back to Contents](#contents)

```
## Project Structure

The project is organized as follows:

WeatherToGo/
├──assets
├──images/
│    ├──clear_moon_night.png
│    ├──cloud_sun_storm.png
│    ├──...
│ ├──JS 
│    ├──main.js
│ ├──styles/
│   ├──style.css
├──index.html
├── README.md

```
[Back to Contents](#contents)


## Pages

### Home Page
- **Description**: The home page displays the current weather conditions, including temperature, weather icons, and a brief weather description. It also features a location input/search bar and a toggle button to switch between GPS-based location tracking and manual location search.
- **User Value**: Provides users with real-time weather updates and allows them to easily switch between different locations.

![Screen Shot 2025-02-06 at 09 58 06](https://github.com/user-attachments/assets/4378c8ed-2be3-4074-8596-20cd06d40622)

![Screen Shot 2025-02-06 at 10 06 44](https://github.com/user-attachments/assets/f344192c-d983-4121-903b-5ddb804b738f)

![Screen Shot 2025-02-06 at 10 07 18](https://github.com/user-attachments/assets/cd2178e7-3d93-4f45-934e-0923ead39ee4)

### 5 Day Forecast Page
- **Description**: This section provides a detailed weather forecast for the next five days, including daily high and low temperatures, weather icons, and brief weather descriptions.
- **User Value**: Helps users plan ahead for the week by providing a comprehensive weather forecast.


[Back to Contents](#contents)

## Styles
```
styles.css
```

The styles for the Weather To Go application are defined in the styles.css ile. Below are the descriptions of the main styles used:

- **Temperature Background Colours**:
  - `.TemperatureBackgroundColour`: Default background color.
  - `.TemperatureBackgroundColourColdest`: Background color for the coldest temperatures.
  - `.TemperatureBackgroundColourCold`: Background color for cold temperatures.
  - `.TemperatureBackgroundColourOK`: Background color for moderate temperatures.
  - `.TemperatureBackgroundColourNice`: Background color for nice weather.
  - `.TemperatureBackgroundColourBitWarm`: Background color for slightly warm temperatures.
  - `.TemperatureBackgroundColourReallyWarm`: Background color for very warm temperatures.

- **Text Areas**:
  - `.TemperatureTextArea`: Styles for displaying the temperature text.
  - `.UVIndexTextArea`: Styles for displaying the UV index text.
  - `.MainAreaTextBottom`: Styles for the bottom text area in the main weather display.

- **Search Bar and Button**:
  - `#searchbar`: Styles for the search bar.
  - `#submitButton`: Styles for the submit button.
  - `#submitButton:hover`: Hover effect for the submit button.



[Back to Contents](#contents)

## Images

### Home Screen
![Home Screen](Assets/Images/sunny.png)
- **Description**: The home screen displays the current weather conditions with a sunny weather icon.

### Weather Alert
![Weather Alert](Assets/Images/rain.png)
- **Description**: The weather alert screen shows an alert for rainy weather.

### Clothing Suggestions
![Clothing Suggestions](Assets/Images/snow.png)
- **Description**: The clothing suggestions screen provides recommendations for snowy weather.

### Hourly/Daily Forecast
![Hourly/Daily Forecast](Assets/Images/cloudy.png)
- **Description**: The hourly/daily forecast screen displays the weather forecast with a cloudy weather icon.

### Location Input and Selection
![Location Input and Selection](Assets/Images/cloud_sun_storm.png)
- **Description**: The location input and selection screen allows users to enter or select locations for weather updates.

[Back to Contents](#contents)

## Dependencies
- Tailwind
- JQuery
- Fontawesome

## Possible Improvements


[Back to Contents](#contents)

## AI Usage
AI has been used to help create some of the images on this project. We have also used AI to help us with some of the edits of our code to speed up production in the project.

[Back to Contents](#contents)

## How to Run / Deployment
1. Clone the repository:
    ```sh
    git clone https://github.com/MathewIsherwood/WeatherToGo
    ```
2. Open `index.html` in your web browser to view the website.

[Back to Contents](#contents)

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

[Back to Contents](#contents)

## License
This project is licensed under the MIT License.

[Back to Contents](#contents)

## Manual Tests
### - User refuses GPS location
![Screen Shot 2025-02-06 at 10 09 11](https://github.com/user-attachments/assets/22a25be4-ed20-47c1-9aff-975da52b36d1)
   Location defaults to London, and user can click switch box to enter an location manually.

### - GPS Location takes too long to load
![Screen Shot 2025-02-06 at 10 24 28](https://github.com/user-attachments/assets/20c62cd2-07ec-4403-a6a3-bcfda71f9df3)
   Error message is displayed that Geo Location services failed, (timed out) and defaults to London.
   
### - Met Office API is down
![Screen Shot 2025-02-06 at 09 48 23](https://github.com/user-attachments/assets/d3718625-d9a9-4ff5-8594-5515dce0a5ac)
   Error message is displayed to user that weather data is unavailable, and to try again.
   *this specific screenshot shows the GPS timed out, and that the met office api is down*
   
### - User searches for a non-existent town name (in UK)
![Screen Shot 2025-02-06 at 10 07 54](https://github.com/user-attachments/assets/f396dcab-e3b8-484f-8ad3-1582d5568e7b)
   User is informed that the location name couldn't be found, and to try another location.

[Back to Contents](#contents)

## Validator Testing
1. HTML
https://validator.w3.org/nu

2. CSS
https://jigsaw.we.org/css-validator/validator

3. JS
https://jsvalidator.com/

4. Lighthouse.

[Back to Contents](#contents)

## Known Bugs
- Entering a location abroad shows the weather for the device's current time, and not converted to the current time of the searched location.
- Deployed site cannot use reverse geolocation, or city name search API services. (This is because those API's only accept HTTP requests, and not HTTPS requests. Modern browsers block non-secure requests)
- Met Office API key has 360 uses for its free version. These uses can run out very quickly!

[Back to Contents](#contents)
