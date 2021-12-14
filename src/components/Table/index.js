import React from 'react';
import './style.scss';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudShowersHeavy, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons'




const Table = () => {
    return (
        <div className="table">
            <div className="header">
                <p className="page-title">5-Day Forecast.</p>
            </div>
            <div className="name">
                <p className="city-name">Porto, Portugal</p>
            </div>
            <div className="center">
                <div class="columns is-variable is-2">
                    <div class="column is-narrow">
                        <p className="week-day">Friday</p>
                        <p className="date">December 6th, 1:00pm</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x"/></p>
                        <p className="temperature">10ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">Saturday</p>
                        <p className="date">December 7th, 1:00pm</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloudShowersHeavy} size="4x"/></p>
                        <p className="temperature">11ºC</p>
                        <p className="sky">light rain</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">Sunday</p>
                        <p className="date">December 8th, 1:00pm</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloud} size="4x"/></p>
                        <p className="temperature">13ºC</p>
                        <p className="sky">broken clouds</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">Monday</p>
                        <p className="date">December 9th, 1:00pm</p>
                        <p className="icon"><FontAwesomeIcon icon={faSun} size="4x"/></p>
                        <p className="temperature">16ºC</p>
                        <p className="sky">clear sky</p>
                    </div>
                    <div class="column is-narrow">
                        <p className="week-day">Tuesday</p>
                        <p className="date">December 10th, 1:00pm</p>
                        <p className="icon"><FontAwesomeIcon icon={faCloudSun} size="4x"/></p>
                        <p className="temperature">8ºC</p>
                        <p className="sky">scattered clouds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;