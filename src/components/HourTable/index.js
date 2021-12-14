import React from 'react';
import './style.scss';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Proptypes from 'prop-types';
import {
    faCloud,
    faCloudShowersHeavy,
    faSun,
    faSnowflake,
    faBolt,
    faTint
} from '@fortawesome/free-solid-svg-icons';

const Table = ({ name, country, date, hours }) => {
    if (!name) {
        return (
            <p>Error fetching data</p>
        );
    }

    const map = new Map();
    map.set('Clear', <FontAwesomeIcon icon={faSun} size="4x" />);
    map.set('Clouds', <FontAwesomeIcon icon={faCloud} size="4x" />);
    map.set('Snow', <FontAwesomeIcon icon={faSnowflake} size="4x" />);
    map.set('Thunderstorm', <FontAwesomeIcon icon={faBolt} size="4x" />);
    map.set('Drizzle', <FontAwesomeIcon icon={faTint} size="4x" />);
    map.set('Rain', <FontAwesomeIcon icon={faCloudShowersHeavy} size="4x" />);

    return (
        <div className="table">
            <div className="header">
                <p className="page-title">Hourly Forecast.</p>
            </div>
            <div className="name">
                <p className="city-name">{`${date}, ${name}, ${country}`}</p>
            </div>
            <div className="center">
                <div class="columns is-variable is-2">
                    {hours.map(
                        (hour, i) =>
                            <>
                                <div class="column is-narrow">
                                    <p className="week-day">{hour.hour}</p>
                                    <p className="date">-</p>
                                    <p className="icon">{map.get(hour.weather.name)}</p>
                                    <p className="temperature">{hour.temp}ºC</p>
                                    <p className="sky">{hour.weather.description}</p>
                                </div>
                            </>
                    )}
                </div>
            </div>
        </div>
    );
}

Table.propTypes = {
    name: Proptypes.string,
    country: Proptypes.string,
    date: Proptypes.string,
    hours: Proptypes.arrayOf(Proptypes.array)
};

export default Table;