# Weather API Application

A lightweight weather application that provides real-time weather information for any city using the OpenWeatherMap API. Built with HTML5, Bootstrap 5, and Vanilla JavaScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technical Stack](#technical-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [File Descriptions](#file-descriptions)
- [Browser Support](#browser-support)
- [Known Limitations](#known-limitations)
- [Author](#author)

## 🌤️ Overview

Weather API Application is a simple web-based weather lookup tool that fetches current weather data from the OpenWeatherMap API. Users can search for weather information by entering a city name or selecting from a list of popular Indian cities. The application displays comprehensive weather details including temperature, humidity, wind speed, pressure, visibility, and weather conditions with appropriate icons.

## ✨ Features

- **City Search**: Search for weather data by entering any city name
- **Popular Cities Dropdown**: Quick access to weather data for 5 popular Indian cities (Hyderabad, Delhi, Mumbai, Bangalore, Kolkata)
- **Real-Time Weather Data**: Fetches live weather information from OpenWeatherMap API
- **Comprehensive Weather Details**:
  - Current temperature in Celsius
  - "Feels Like" temperature
  - Humidity percentage
  - Wind speed in km/h
  - Atmospheric pressure in hPa
  - Visibility in km
  - Weather description and condition icons
  - Geographic location (city/country name)
- **Weather Icons**: Visual representation of weather conditions
- **Responsive Bootstrap UI**: Clean, modern interface using Bootstrap 5 framework
- **Bootstrap Icons**: Icons for enhanced visual communication

## 📁 Project Structure

```
WeatherAPIApplication/
├── public/
│   ├── weatherapi.html          # Main HTML file
│   ├── images/                  # Weather condition icons
│   ├── docs/                    # Documentation resources
│   └── videos/                  # Video tutorials/demos
├── src/
│   ├── scripts/
│   │   └── weatherapi.js        # Core JavaScript functionality
│   ├── sass/                    # SASS files (empty - uses Bootstrap)
│   └── styles/                  # CSS files (empty - uses Bootstrap)
├── node_modules/                # Dependencies
├── package.json                 # Project configuration
└── README.md                    # This file
```

## 🛠️ Technical Stack

- **Frontend Framework**: HTML5
- **Styling**: Bootstrap 5.3.8, Bootstrap Icons 1.13.1
- **JavaScript**: Vanilla JavaScript (ES6+)
- **API**: OpenWeatherMap API 2.5
- **Package Manager**: npm
- **Module Type**: CommonJS

## 📦 Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup Steps

1. **Clone or download the project**:
   ```bash
   cd WeatherAPIApplication
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Open the application**:
   - Navigate to the `public/` directory
   - Open `weatherapi.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if http-server is installed)
     npx http-server
     ```
   - Visit `http://localhost:8000/public/weatherapi.html`

## 🚀 Usage

### Getting Weather Information

#### Method 1: Search by City Name
1. Enter a city name in the search input field
2. Click the "Search" button or press Enter
3. Weather information will be displayed below

#### Method 2: Select from Popular Cities
1. Select a city from the "Popular Cities" dropdown menu
2. Click the "Fetch" button
3. Weather information will be displayed below

### Displayed Weather Information

The application displays the following weather data for the selected city:

| Parameter | Unit | Description |
|-----------|------|-------------|
| Temperature | °C | Current temperature |
| Feels Like | °C | Human perceived temperature |
| Humidity | % | Moisture level in the air |
| Wind Speed | km/h | Speed of wind |
| Pressure | hPa | Atmospheric pressure |
| Visibility | km | How far one can see |
| Description | - | Weather condition (e.g., "clear sky", "rainy") |

## 🔌 API Documentation

### OpenWeatherMap API

**Endpoint Used**: `https://api.openweathermap.org/data/2.5/weather`

**Parameters**:
- `q`: City name (string)
- `appid`: API key (string)
- `units`: Unit of measurement - `metric` for Celsius

**Response**:
```json
{
  "cod": "200",
  "name": "Hyderabad",
  "main": {
    "temp": 28.5,
    "feels_like": 30.2,
    "pressure": 1013,
    "humidity": 65
  },
  "visibility": 8000,
  "wind": {
    "speed": 3.5
  },
  "weather": [{
    "description": "clear sky",
    "icon": "01d"
  }]
}
```

**Error Handling**:
- If a city is not found, the application displays: "The [city name] Weather Data is not Available. Search for popular places."
- Status code `404` indicates the city was not found

**API Key**: The application uses a hardcoded API key: `27c33796bbe9ba8bcc2c42c96105c762`

## 📄 File Descriptions

### `public/weatherapi.html`
**Purpose**: Main HTML structure and UI layout  
**Key Components**:
- Header with application title and icon
- Search input field with search button
- Popular cities dropdown selector
- Main content section (dynamically populated)
- Footer with developer credit

**External Dependencies**:
- Bootstrap CSS framework
- Bootstrap Icons font
- Bootstrap JavaScript bundle
- weatherapi.js script

**Attributes**:
- `onload="getData('Hyderabad')"`: Loads weather for Hyderabad on page load
- Language: English
- Viewport: Responsive meta tag (though app is noted as non-responsive)

### `src/scripts/weatherapi.js`
**Purpose**: Core application logic and API integration  

**Variables**:
- `API_KEY`: OpenWeatherMap API key constant

**Functions**:

#### `getData(city)`
**Parameters**: 
- `city` (string): City name to fetch weather for

**Functionality**:
- Makes fetch request to OpenWeatherMap API with temperature units set to Celsius
- Extracts weather data from API response
- Handles error cases (city not found - code 404)
- Dynamically creates and populates HTML elements with weather data
- Displays weather icon from public/images directory
- Renders weather information in two-column layout

**Error Handling**:
- Checks for `data.cod === "404"` to identify not-found cities
- Displays user-friendly error message with sad emoji icon

#### `searchCity()`
**Parameters**: None  
**Functionality**:
- Gets the city name from the search input field (`.city` class)
- Calls `getData()` with the entered city name

#### `selectedCity()`
**Parameters**: None  
**Functionality**:
- Gets the selected city from the dropdown menu (`#selectCity`)
- Calls `getData()` with the selected city name

### `node_modules/`
Contains installed npm packages:
- **bootstrap**: v5.3.8 - CSS framework for styling and components
- **bootstrap-icons**: v1.13.1 - Icon library for UI elements

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Requires JavaScript enabled

## ⚠️ Known Limitations

1. **API Key Exposure**: The API key is hardcoded in the JavaScript file. For production use, implement backend proxy or environment variables.

2. **No Caching**: Each search makes a new API request. Consider implementing caching for repeated searches.

3. **Limited City List**: Only 5 popular Indian cities in the dropdown. Any city can be searched but list is fixed.

4. **No SSL/HTTPS**: API calls use HTTPS, but ensure your hosting supports it.

5. **Image Dependencies**: Weather icons are loaded from the `public/images/` directory. Ensure image files exist with proper naming convention from OpenWeatherMap.

6. **No Loading States**: No visual feedback while API request is being processed.

7. **No Offline Support**: Requires internet connection to fetch weather data.

## 🔐 Security Notes

- **API Key**: Currently hardcoded in the HTML file. In production:
  - Move to backend server
  - Use environment variables
  - Implement API request proxying through your own server
  
- **CORS**: Ensure CORS is properly configured if deploying on different domain

## 🛠️ Future Enhancements
- Multi-day forecast functionality
- Location-based weather using geolocation API
- Unit toggle (Celsius/Fahrenheit)
- Search history/favorites
- Proper environment variable configuration
- Loading spinner during API calls
- Local caching with localStorage
- Error retry mechanism
- Accessibility improvements (ARIA labels)
- Unit tests

## 📄 License

ISC

## 👨‍💻 Author

Developed By: **Santhosh Bodire**

---

**Last Updated**: June 2026  
**Version**: 1.0.0
