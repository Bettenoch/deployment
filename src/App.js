import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WeatherData from './component/WeatherData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<WeatherData />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
