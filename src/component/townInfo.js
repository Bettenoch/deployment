import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectedTown } from '../redux/AppSlice';
import '../styles/TownInfo.css';
import tanzania from './assets/tanzaniamap.gif';
import kenya from './assets/kenyamap.gif';
import ethiopia from './assets/ethiopiamap.gif';
import morocco from './assets/marococco map.gif';
import cameroon from './assets/camerounmap.gif';
import somalia from './assets/somaliamap.gif';
import rwanda from './assets/rwanda07map.gif';

import temp from './assets/temp1.png';
import humidity from './assets/humidity1.png';
import degree from './assets/thermometer.png';
import wind from './assets/windwarningsign.png';

const TownInfo = () => {
  const { townName } = useParams();
  const country = useSelector((state) => selectedTown(state, townName));

  const countryMap = {
    Kenya: kenya,
    Tanzania: tanzania,
    Ethiopia: ethiopia,
    Cameroon: cameroon,
    Morocco: morocco,
    Somalia: somalia,
    Rwanda: rwanda,
  };

  return (
    <div className="town container">
      {
                country && (
                <article key={country.id} className="town-bar">
                  <div className="town-head">
                    <Link className="country" to="/">
                      <img
                        src="https://img.icons8.com/windows/32/ffffff/back.png"
                        alt="forward"
                      />
                    </Link>
                    <h2 className="country-name">
                      {country.name}
                      {' '}
                      Weather Today
                    </h2>
                  </div>
                  <div className="more-details">
                    <img
                      src={countryMap[country.name]}
                      className="map"
                      alt="Map"
                      width={120}
                      height={120}
                    />
                    <div>
                      <h2 className="title">{country.name}</h2>
                      <h2 className="weather-descp">{country.weather[0].description}</h2>
                    </div>
                  </div>

                  <div className="town-bottom">
                    <h2 className="weather-breakdown">City/Town Weather - @2023</h2>
                    <article className="box-info">
                      <div className="temp-box box">
                        <p className="temp names">
                          <span>Temperature: </span>
                          {Math.round(country.main.temp)}
                          {' '}
                          °C
                        </p>
                        <img src={temp} className="wind4" alt="wind" />
                      </div>
                      <div className="wind-box box">
                        <p className="wind names">
                          <span>Wind Speed: </span>
                          {Math.round(country.wind.speed)}
                          {' '}
                          Km/h
                        </p>
                        <img src={wind} className="wind4" alt="wind" />
                      </div>
                      <div className="degree-box box">
                        <p className="degree names">
                          <span>Wind degree: </span>
                          {Math.round(country.wind.deg)}
                          °
                        </p>
                        <img src={degree} className="wind4" alt="wind" />
                      </div>
                      <div className="humidity-box box">
                        <p className="humidity names">
                          <span>Humidity: </span>
                          {Math.round(country.main.humidity)}
                          °
                        </p>
                        <img src={humidity} className="wind4" alt="wind" />
                      </div>

                    </article>
                  </div>
                </article>
                )
            }
    </div>
  );
};

TownInfo.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

export default TownInfo;
