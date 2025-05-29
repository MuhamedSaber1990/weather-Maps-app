# Weather & Map App

## A simple Node.js and Express application that fetches current weather data from OpenWeatherMap and displays the location on a Google Map. The project uses EJS templates for views and Google Places.

## Features

- Search for a city using an autocomplete-enabled input.
- Display current temperature (°C) and weather conditions.
- Show the city’s location on an embedded Google Map.
- Responsive, eye-friendly design with soft colors.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- OpenWeatherMap API key
- Google Cloud API key with **Geocoding**, **Maps JavaScript**, and **Places** libraries enabled.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-map-app.git
   cd weather-map-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   npm install axios express ejs


   ```

## Configuration

1. Create a `.env` file in the project root:

   ```bash
   touch .env
   ```

2. Add your API keys to `.env`:

   ```env
   OPENWEATHER_KEY=your_openweather_api_key || mine is added
   GOOGLE_MAPS_KEY=your_google_maps_api_key || mine is added
   ```

> **Note:** Make sure to restrict your Google API key to the required services and your domain/localhost.

## Project Structure

```
weather-map-app/
├── views/
│   ├── index.ejs     # Search form with autocomplete
│   └── weather.ejs   # Weather results and map display
├── public/           # (optional) Static files like CSS
├── app.js            # Main Express application
├── package.json      # Project metadata and scripts
└── .env              # Environment variables (not committed)
```

## Usage

1. **Start the server**

   ```bash
   node app.js
   ```

2. **Open in browser**
   Navigate to `http://localhost:3000`.

3. **Search for a city**

   - Start typing the city name; select from autocomplete suggestions.
   - Submit to see weather info and the map.

## Customization

- **Styling**: Modify internal CSS in `views/*.ejs` or move to external CSS files in `public/`.
- **Template Engine**: Switch to Pug by installing `pug` and renaming templates.
- **API Options**: Adjust units (metric/imperial) or add more weather data fields.

## Troubleshooting

- **Invalid API key**: Check `.env` values and Google Cloud Console restrictions.
- **No suggestions**: Ensure `libraries=places` is included in the Google Maps script URL.
- **City not found**: Confirm correct spelling or adjust geocoding component restrictions.

## License

MIT © Mohamed Saber Refaie Kenawi

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/)
- [Google Maps Platform](https://developers.google.com/maps)
