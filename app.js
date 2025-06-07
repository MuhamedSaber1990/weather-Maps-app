import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const WEATHER_KEY = process.env.OPENWEATHER_KEY;
const GMAPS_KEY = process.env.GOOGLE_MAPS_KEY;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  const city = req.body.city;

  try {
    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: WEATHER_KEY,
          units: "metric",
        },
      }
    );
    const weather = weatherResponse.data;

    const geoResponse = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: city,
          key: GMAPS_KEY,
        },
      }
    );
    const loc = geoResponse.data.results[0].geometry.location;

    res.render("weather", {
      weather,
      loc,
      googleMapsKey: GMAPS_KEY,
    });
  } catch (err) {
    console.error(err);
    res.send(`
      <p>⚠️ Error: Could not retrieve data.</p>
      <p><a href="/">← Back to search</a></p>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
