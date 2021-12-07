import React from 'react';
import './style.scss';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudShowersHeavy, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons'
// import { TiWeatherSunny, TiWeatherShower, TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti';
// import { BsFillSunFill } from 'react-icons/bs';



const Table = () => {
    return (
        <div className="table">
            <div className="header">
                <p className="page-title">Hourly Forecast.</p>
            </div>
            <div className="name">
                <p className="city-name">Monday, 7th December</p>
            </div>
            <div className="center">
                <div class="columns is-variable is-2">
                    <div class="column is-narrow">
                        <p className="week-day">00-03h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x" /></p>
                        <p className="temperature">10ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">03-06h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x" /></p>
                        <p className="temperature">10ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">06-09h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x"/></p>
                        <p className="temperature">10ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">09-12h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloudShowersHeavy} size="4x"/></p>
                        <p className="temperature">11ºC</p>
                        <p className="sky">light rain</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">12-15h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloud} size="4x"/></p>
                        <p className="temperature">13ºC</p>
                        <p className="sky">broken clouds</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">15-18h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x"/></p>
                        <p className="temperature">16ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">18-21h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloudSun} size="4x"/></p>
                        <p className="temperature">8ºC</p>
                        <p className="sky">scattered clouds</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">21-24h</p>
                        <p className="date">-</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloudSun} size="4x" /></p>
                        <p className="temperature">8ºC</p>
                        <p className="sky">scattered clouds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;