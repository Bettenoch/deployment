import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/AppSlice';
import '../styles/WeatherData.css';
import world from './assets/world.png';
import tanzania from './assets/tanzaniamap.gif';
import kenya from './assets/kenyamap.gif';
import ethiopia from './assets/ethiopiamap.gif';
import morocco from './assets/marococco map.gif';
import cameroon from './assets/camerounmap.gif';
import somalia from './assets/somaliamap.gif';
import rwanda from './assets/rwanda07map.gif';

const WeatherData = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.weather);

  const countryMap = {
    Kenya: kenya,
    Tanzania: tanzania,
    Ethiopia: ethiopia,
    Cameroon: cameroon,
    Morocco: morocco,
    Somalia: somalia,
    Rwanda: rwanda,
  };

  const handleCountry = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = weather.filter((data) => {
    const country = data.name.toLowerCase();
    const locate = search.toLowerCase();
    return country.includes(locate);
  });

  useEffect(() => {
    if (status === 'waiting') {
      dispatch(fetchData());
    }
  }, [dispatch]);

  if (status === 'waiting') {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <>
      <header className="main-container">
        <p className="home-title">WeatherChart</p>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Country e.g kenya"
          value={search}
          onChange={handleCountry}
        />

      </header>
      <section className="world-container">
        <article className="world-details">
          <img src={world} className="world-map" alt="world" />
          <h2 className="world-text">World Weather</h2>
        </article>
      </section>
      <section className="country-info">
        {
      searchResult.map((country) => (
        <article key={country.name} className="country-weather">
          <Link to={`/city/${country.name}`} className="hall">
            <div className="card">
              <div className="weather-chart">
                {countryMap[country.name] && (
                  <img
                    src={countryMap[country.name]}
                    alt={country.name}
                    width={120}
                    height={120}
                  />
                )}

              </div>
              <div className="card-bottom">
                <img className="right-icon" src="https://img.icons8.com/ios/50/ffffff/circled-right.png" alt="Cloud" />
                <h1 className="country-name">{country.name}</h1>
                <p className="temp-info">
                  <span className="temp-dt">Temperature </span>
                  {Math.round(country.main.temp)}
                  {' '}
                  °C
                </p>

              </div>
            </div>
          </Link>
        </article>
      ))
    }
      </section>
    </>
  );
};

export default WeatherData;
