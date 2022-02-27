import './styles.css'
import Cards from './Cards'
import { WeatherProvider } from '../context/WeatherContext';

function Header() {


  const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


  const d = new Date();
  let day = weekday[d.getDay()];  
  
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <WeatherProvider> 
    <Cards />
    </WeatherProvider>
  )
}

export default Header;