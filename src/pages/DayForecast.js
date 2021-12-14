import React, { useState, useEffect } from 'react';
import Table from '../components/Table/index';
import axios from "axios";
import { useParams } from 'react-router-dom';
const DayForecast = () => {
    const [data, setData] = useState([]);
    const { city } = useParams();


    const parseData = (data) => {
        const parsed = {};

        //Get city id
        parsed.name = data.city.name;
        parsed.country = data.city.country;

        //Get days temp
        parsed.days = [];
        const indexes = [0,8,16,24,32,39];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        for(let i = 0; i < indexes.length; i++) {
            let item = data.list[indexes[i]];
            parsed.days.push({ date: { monthDay: new Date(item.dt_txt).getDate(), weekDay: days[new Date(item.dt_txt).getDay()], month: months[new Date(item.dt_txt).getMonth()]}, temp: Math.round(item.main.temp), weather:{name:item.weather[0].main, description:item.weather[0].description}});
        }

        console.log(parsed);
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
        <Table></Table>
    );
};

export default DayForecast;