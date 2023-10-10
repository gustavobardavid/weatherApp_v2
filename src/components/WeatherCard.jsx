import PropTypes from 'prop-types';

const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
      <div className="weather-icon">
    
      </div>
      <div className="weather-info">
        <h2>{weather.location.name}</h2>
        <p>{weather.current.temp_c}°C</p>
        <p>{weather.current.condition.text}</p>
        <p><img src={weather.current.condition.icon} alt="" /></p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
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
