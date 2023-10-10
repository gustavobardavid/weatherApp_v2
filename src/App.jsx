import  { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Inicialmente, não está carregando
  const [city] = useState('Cajazeiras'); // Cidade padrão
  const [searchCity, setSearchCity] = useState(''); // Estado para a pesquisa

  const key = '6d6f1b20f1cc46eeb1d181345231010';

  const fetchData = async (cityName) => {
    setIsLoading(true); // Define isLoading como true durante a busca
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`
      );
      const weatherData = response.data;
      setWeatherList([weatherData]);
    } catch (error) {
      console.error(`Erro: ${error}`);
    } finally {
      setIsLoading(false); // Define isLoading como false após a busca
    }
  };

  useEffect(() => {
    // Inicialmente, carrega o clima da cidade padrão (Cajazeiras)
    fetchData(city);
  }, []);

  const handleSearch = () => {
    // Quando o usuário clicar no botão de pesquisa
    fetchData(searchCity); // Chama fetchData com o nome da cidade inserido
  };

  return (
    <>
      <header className="header"></header>
      <div className="container">
        <div className="content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Digite o nome da cidade"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <button onClick={handleSearch}>Pesquisar</button>
          </div>
          {isLoading ? (
            <div className="loading">Carregando...</div>
          ) : (
            weatherList.map((weather, index) => (
              <WeatherCard key={index} weather={weather} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
