import React, {useState} from "react";
import axios from "axios";
const api = {
    key: "0aea9c5ba4687b7c0832c01beab53710",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    function checkTemp(){
        if(typeof weather.main !== "undefined"){
            let temp = weather.main.temp
            let weatherStat = weather.weather[0].main
            if(weatherStat === 'Rain'){
                return "app rain"
            }else if(weatherStat === 'Snow'){
                return "app snow"
            }else if(weather.main.temp > 18){
                return "app warm"
            }else if(weather.main.temp <= 18) {
                return "app cold"
            }
        }else {
            return "app"
        }
    }

    const search = evt => {
        if (evt.key === 'Enter'){
            axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => {
                    console.log(res.data)
                    setWeather(res.data)
                })
        }

    }

    let date = String(new window.Date())
    date = date.slice(0,15)

  return (
    <div className={checkTemp()}>
      <main>
          <div className="search-box">
              <input
                  type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}/>
          </div>

          {(typeof weather.main != "undefined") ? (
              <div>
                  <div className="location-box">
                      <div className='location'>{weather.name}, {weather.sys.country}</div>
                      <div className='date'>{date}</div>
                  </div>
                  <div className='weather-box'>
                      <div className='temp'>
                          {Math.round(weather.main.temp)}℃
                      </div>
                      <div className='weather'>{ weather.weather[0].main}</div>
                  </div>
              </div>
          ) : ('')}
      </main>
    </div>
  );
}

export default App;
