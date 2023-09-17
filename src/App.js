import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import WeatherData from './component/WeatherData';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<WeatherData />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
