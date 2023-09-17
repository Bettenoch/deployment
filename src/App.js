import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WeatherData from './component/WeatherData';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route index element={<WeatherData />} />
      </Routes>

    </div>
  );
}

export default App;
