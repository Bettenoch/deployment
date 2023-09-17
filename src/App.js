import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WeatherData from './component/WeatherData';
import TownInfo from './component/townInfo';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route index element={<WeatherData />} />
        <Route path="/city/:townName" element={<TownInfo />} />
      </Routes>

    </div>
  );
}

export default App;
