import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://api.weatherapi.com/v1/current.json?key=6d6f1b20f1cc46eeb1d181345231010&q=Cajazeiras&aqi=no'
        );
        const weatherData = response.data; // Assuming data structure matches the response
        setWeatherList([weatherData]);
        setIsLoading(false);
      } catch (error) {
        console.error(`Erro: ${error}`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        {/* <img
          src="./pokebola.png" 
          alt="Pokémon Girando"
          className="loading-spinner" 
        /> */}
        Carregando...
      </div>
    );
  }

  return (
    <>
      <header className="header"></header>
      <div className="pokedex">
        <div className="pokemon-grid">
          {weatherList.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
