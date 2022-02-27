import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const WeatherContext = createContext();
export const WeatherProvider = ({children}) => {
    const [cities, setCities] = useState(['izmir'])
    const [temp, setTemp] =  useState([])
    const [temp2, setTemp2] =  useState([])
    const [temp3, setTemp3] =  useState([])
    const [temp4, setTemp4] =  useState([])
    const [temp5, setTemp5] =  useState([])
    const [name, setName] = useState ([])
    const [feels, setFeels] = useState ([])
    const [minTemp, setMinTemp] = useState ([])
    const [maxTemp, setMaxTemp] = useState ([])
    const [humidity, setHumidity] = useState ([])
    const [weather, setWeather] = useState ([])

        useEffect(() => {
            axios(`https://api.openweathermap.org/data/2.5/forecast?q=${cities}&units=metric&appid=727a397bd40210a227143997b5ee9bd6`)
            .then(res => {
              setTemp(res.data.list[0].main.temp); 
              setTemp2(res.data.list[8].main.temp); 
              setTemp3(res.data.list[16].main.temp); 
              setTemp4(res.data.list[24].main.temp); 
              setTemp5(res.data.list[32].main.temp); 
              setName(res.data.city.name); 
              setFeels(res.data.list[0].main.feels_like); 
              setMinTemp(res.data.list[0].main.temp_min);
              setMaxTemp(res.data.list[0].main.temp_max)
              setHumidity(res.data.list[0].main.humidity);
              setWeather(res.data.list[0].weather[0].main);
            })
          })

          const values = {
            cities,
            setCities, 
            temp,
            setTemp,
            temp2,
            setTemp2,  
            temp3,
            setTemp3,  
            temp4,
            setTemp4,  
            temp5,
            setTemp5,  
            name,
            setName,  
            feels,
            setFeels,
            setMinTemp,
            minTemp,
            setMaxTemp,
            maxTemp,
            humidity,
            setHumidity,
            weather,
            setWeather
            }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
        )
}


export const useWeather = () => useContext(WeatherContext)
