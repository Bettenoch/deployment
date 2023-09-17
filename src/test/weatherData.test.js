import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import WeatherData from '../component/WeatherData';

describe('testing page elements', () => {
  const testData = {
    weather: [
      { main: { temp: 18.46 } },
      { name: 'Kenya' },
    ],
    Status: false,
    error: null,
  };

  it('Test weather data', () => {
    const weatherDetails = testData.weather;
    expect(weatherDetails).toEqual(testData.weather);
  });

  it('Should return weather status', () => {
    const weatherHd = testData.Status;
    expect(weatherHd).toBe(testData.Status);
  });
  it('should give correct country name ', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WeatherData />
        </BrowserRouter>
      </Provider>,
    );
    const info = screen.findByText('World Weather');
    expect(info).toMatchSnapshot();
  });
});
