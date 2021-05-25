
import React, { Component, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';


// class Weather extends Component{
function Weather() {
    
    const [loading, setLoading] = useState(true);
    const key = 'c29d2eda471699b8861b92081db3d7b0';
    const [city, setcity] = useState('Jaipur');
    const [City, setCity] = useState('Jaipur');
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [description, setDescription] = useState([]);
    const [imgurl,setImgurl]=useState('');
    // const [Data,setData]=useState()
    function update(e) {
        const newcity = e.target.value;
        setcity(newcity);
    }
   
    async function Temp() {
        setLoading(false);
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3d5dcee20f904f28ef76beaec1b71992&units=metric';
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                // setData(data);
                setTemp(data.main.temp);
                setDescription(data.weather[0]);
                setHumidity(data.main.humidity);
                setImgurl("http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png")
                
            }).catch((error) => {
                console.log(error);
            });
        setCity(city);
    }
    if (loading) { Temp(); }

    {
        return (
            <div className="outer-div-temp">

                <h2 className="title"> Check Your city Weather</h2>
                <input className="cityName" value={city} onChange={update} placeholder="Enter city Name"></input>
                <br/>
                <Button className="city-button" variant="contained" color="secondary" onClick={Temp}>Check</Button>
                <div className="weather-div">
                    <h1>{City}</h1>
                    <div className="details">
                      
                        <p className="temperature">Temperature : {temp}</p>
                        <p className="temperature">{description.description}</p>
                        <img className='img-temp'src={imgurl}></img>
                        <p className="temperature"> Humidity : {humidity}</p>
                    </div>

                </div>


            </div>
        )
    }
}
export default Weather;