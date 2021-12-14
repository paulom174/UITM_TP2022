import HourTable from '../components/HourTable/index';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const HourForecast = () => {
    const [data, setData] = useState([]);
    const { city, index } = useParams();

    const parseData = (data) => {
        let parsed = {};
        //Get city id
        parsed.name = data.city.name;
        parsed.country = data.city.country;

        const daySearched = parseInt(new Date(Date.now()).getDate()) + parseInt(index);
        
        let daysSorted = data.list.filter((x) => {
            const curDay = new Date(x.dt_txt).getDate();
            return (curDay === daySearched);
        });

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var hours = ['00-03h', '03-06h', '06-09', '09-12h', '12-15h', '15-18h', '18-21h', '21-24h']
        parsed.hours = [];

        for (let i = 0; i < daysSorted.length; i++) {
            let item = daysSorted[i];
            let monthDay = new Date(item.dt_txt).getDate();
            let weekDay = days[new Date(item.dt_txt).getDay()];
            let month = months[new Date(item.dt_txt).getMonth()];
            parsed.day = weekDay + ', ' + monthDay + ' ' + month;
            parsed.hours.push({
                hour: hours[8 - daysSorted.length + i],
                temp: Math.round(item.main.temp),
                weather: {
                    name: item.weather[0].main,
                    description: item.weather[0].description
                }
            });
        }

        setData(parsed);
    }

    const fetchData = async (city) => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=e4bec29d6141fb6ce91d0a123169641d`);
        setData(response.data);
        parseData(response.data);
    };

    useEffect(() => {
        // Get city weather
        fetchData(city);
    }, [city]);


    return (
        <HourTable
            name={data.name}
            country={data.country}
            date={data.day}
            hours={data.hours}
        />
    );
};


export default HourForecast;