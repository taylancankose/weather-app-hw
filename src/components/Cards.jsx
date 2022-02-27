import {useState, useEffect, useContext} from 'react'
import {useWeather} from '../context/WeatherContext';
import './styles.css'

const provinces = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"]
function Cards() {
  const handleChange =(e) => {
    setCities(e.target.value);
  }
  const {name,temp2,temp3,temp4,temp5,humidity,minTemp,maxTemp,date,day,temp,cities,setCities,feels,weather} = useWeather()
  const handleSubmit = (e) => {
    e.preventDefault()
  
  }
  
  return (
    <section>
    <div className="container  h-100">
      <div className="row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-9 col-lg-7 col-xl-5">
          <form className='mb-4 ' onSubmit={handleSubmit}>
              <select onChange={handleChange} className='selector d-inline dropdown' name={cities}>
              {
              provinces.map((city, i) => <option  key={i} className='text-primary label' value={city}>{city}</option>)
              }        
              </select>
            </form>
          <div className="card mb-4 gradient-custom">
            <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4 mt-5 pb-2">
                      <div>
                        <h2 className="display-2"><strong>{Math.round(temp)}°C</strong></h2>
                        <p className="text-muted mb-0">{name}</p>
                        <p className="mb-0 text-muted">{date} {day}</p>
                      </div>
                      <div>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                          width="150px" />
                        <p className='mt-3 text-center capitalize'>{weather}</p>
                      </div>
                    </div>
            </div>
          </div>

          <div className="card mb-4 ">
          <div className="card-body p-4 mt-5">
                  <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div className="flex-column">
                      <i className="fas fa-thin fa-temperature-half fa-2x mb-3 icon" ></i>
                      <p className="mb-0">Feeling:</p>
                      <p className="mb-0"><strong>{Math.round(feels)}°C</strong></p>
                    </div>
                    <div className="flex-column">
                      <i className="fas fa-thin fa-temperature-full fa-2x mb-3 icon" ></i>
                      <p className="mb-0">Max Temp:</p>
                      <p className="mb-0"><strong>{Math.round(maxTemp)}°C</strong></p>
                    </div>
                    <div className="flex-column">
                    <i className="fas fa-thin fa-temperature-low fa-2x mb-3 icon"></i>
                    <p className="mb-0">Min Temp:</p>
                    <p className="mb-0"><strong>{Math.round(minTemp)}°C</strong></p>
                    </div>
                    <div className="flex-column">
                      <i className="fas fa-thin fa-droplet fa-2x mb-3 icon" ></i>
                      <p className="mb-0">Humidity:</p>
                      <p className="mb-0"><strong>{humidity}%</strong></p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card" >
            <div className="card-body p-4 mt-5">
                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                      <div className="flex-column">
                        <p className="small"><strong>{Math.round(temp2)}°C</strong></p>
                        <i className="fas fa-sun fa-2x mb-3 icon"></i>
                        <p className="mb-0"><strong>Tue</strong></p>
                      </div>
                      <div className="flex-column">
                        <p className="small"><strong>{Math.round(temp3)}°C</strong></p>
                        <i className="fas fa-cloud fa-2x mb-3 icon"></i>
                        <p className="mb-0"><strong>Wed</strong></p>
                      </div>
                      <div className="flex-column">
                        <p className="small"><strong>{Math.round(temp4)}°C</strong></p>
                        <i className="fas fa-cloud fa-2x mb-3 icon"></i>
                        <p className="mb-0"><strong>Thu</strong></p>
                      </div>
                      <div className="flex-column">
                        <p className="small"><strong>{Math.round(temp5)}°C</strong></p>
                        <i className="fas fa-cloud-showers-heavy fa-2x mb-3 icon"></i>
                        <p className="mb-0"><strong>Fri</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
  )
}

export default Cards