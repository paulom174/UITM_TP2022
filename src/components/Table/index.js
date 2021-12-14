import React from 'react';
import './style.scss';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCloud, 
    faCloudShowersHeavy, 
    faSun, 
    faSnowflake,
    faBolt,
    faTint

} from '@fortawesome/free-solid-svg-icons'
import Proptypes from 'prop-types';


const Table = ({name, country, days}) => {
    if(!name) {
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
                <p className="page-title">5-Day Forecast.</p>
            </div>
            <div className="name">
                <p className="city-name">{name}, {country}</p>
            </div>
            <div className="center">
                <div class="columns is-variable is-2">
                    {days.map(
                        (day, i) => 
                            <>
                                <div class="column is-narrow">
                                    <p className="week-day">{day.date.weekDay}</p>
                                    <p className="date">{day.date.month} {day.date.monthDay}th, 1:00pm</p>
                                    <p className="icon">{map.get(day.weather.name)}</p>
                                    <p className="temperature">{day.temp}ºC</p>
                                    <p className="sky">{day.weather.description}</p>
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
    days: Proptypes.arrayOf(Proptypes.array)
};


export default Table;