import './App.css';
import Header from './components/Header';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Header />
      </WeatherProvider>
    </div>
  );
}

export default App;
