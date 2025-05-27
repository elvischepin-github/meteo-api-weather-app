# Meteo.lt API (LHMT) Project: Weather Forecast

**Disclaimer**  
> Data in this project is provided by the [Meteo.lt](https://api.meteo.lt/) API, courtesy of the Lithuanian Hydrometeorological Service (LHMT). This data is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). To view the license, visit [Creative Commons](https://creativecommons.org/licenses/by/4.0/). The data is presented "as is," and while every effort has been made to ensure its proper integration, I am not responsible for any inaccuracies, delays, or errors in the data provided by the API.
---
![Screenshot 2025-03-23 at 21 00 32](https://github.com/user-attachments/assets/6feefcb1-44ff-426a-aa8f-a3f8da1dd9d1)
## About
This is a weather forecast web application with back-end logging of user actions.

## Features
- Search for a city to view its weather details: temperature, condition, "feels like" temperature, wind speed, cloud cover, chance of rain, humidity, and sea-level pressure.
- Displays a five-day weather forecast for the selected city.
- Saves up to three past searches for quick access.
- Responsive design optimized for both mobile and desktop.
- Logs searched cities and quick-access selections to the back-end, including the city name and timestamp.

## How to Use Application
- Enter your city of choice to see weather information about it.
- Your past search will be available for quick search below the search bar.

## Technologies
- Next.js (Framework)
- React (JavaScript)
- Sass/SCSS (CSS)
- React Bootstrap
- Node.js (Express, Winston, CORS)

## How to Run Project
1. Clone or download project folder.
2. Open folder (root folder) in terminal and run `npm run dev` to start Next.js server.
3. (Optional) Open second terminal (root folder) and run `sass --watch ./src/app/styles/globals.scss:./src/app/styles/globals.css` (to compile `global.scss` file into the `global.css`.
4. Open third terminal in the `/backend` folder and run `npm start` to launcg back-end logger.
