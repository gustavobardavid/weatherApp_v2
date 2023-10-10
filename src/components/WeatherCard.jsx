import PropTypes from 'prop-types';
import '/src/styles/Cartao.css';
const WeatherCard = ({ weather }) => {
  return (
    <div className="cartao">
    
      <div className="weather-info">
        <h1>{weather.location.name}</h1>
        <h2>{weather.location.region}, {weather.location.country}</h2>
        <h2>{weather.current.temp_c}°C</h2>
        <h3>{weather.current.condition.text}</h3>
        <p><img src={weather.current.condition.icon} alt="" /></p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      region:PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    current: PropTypes.shape({
      temp_c: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    icon_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherCard;
