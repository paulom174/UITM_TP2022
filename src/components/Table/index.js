import React from 'react';
import './style.css';
import 'bulma/css/bulma.min.css';
import { TiWeatherSunny, TiWeatherShower, TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti';


const Table = () => {
    return (
        <div class="columns is-variable is-2">
            <div class="column is-narrow">
                <p>Friday</p>
                <p>December 6th, 1:00pm</p>
                <p><TiWeatherSunny></TiWeatherSunny></p>
                <p>10ºC</p>
                <p>clear sky</p>
            </div>
            <div class="column is-narrow">
                <p>Saturday</p>
                <p>December 7th, 1:00pm</p>
                <p><TiWeatherShower></TiWeatherShower></p>
                <p>11ºC</p>
                <p>light rain</p>
            </div>
            <div class="column is-narrow">
                <p>Sunday</p>
                <p>December 8th, 1:00pm</p>
                <p><TiWeatherCloudy></TiWeatherCloudy></p>
                <p>13ºC</p>
                <p>broken clouds</p>
            </div>
            <div class="column is-narrow">
                <p>Monday</p>
                <p>December 9th, 1:00pm</p>
                <p><TiWeatherSunny></TiWeatherSunny></p>
                <p>16ºC</p>
                <p>clear sky</p>
            </div>
            <div class="column is-narrow">
                <p>Tuesday</p>
                <p>December 10th, 1:00pm</p>
                <p><TiWeatherPartlySunny></TiWeatherPartlySunny></p>
                <p>8ºC</p>
                <p>scattered clouds</p>
            </div>
        </div>
    );
}

export default Table;