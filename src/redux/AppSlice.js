import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const countries = [
  'Kenya',
  'Tanzania',
  'Somalia',
  'Morocco',
  'Ethiopia',
  'Rwanda',
  'Cameroon',
];

export const fetchData = createAsyncThunk(
  'fetchWeatherData',
  async () => {
    try {
      const info = countries.map(async (country) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=dfc3ab73912ff43cab2c036dc6f9a0d5&units=metric`);
        if (!res.ok) {
          throw new Error('Something went wrong please try again!!');
        }
        const data = await res.json();
        return data;
      });
      return Promise.all(info);
    } catch (error) {
      throw new Error('Failed to get weather data');
    }
  },
);

const townSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: [],
    status: 'waiting',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'Success';
        state.weather = action.payload;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'loading';
        state.status = action.payload;
      });
  },
});

export const weatherData = (state) => state.weather.weather;
export const weatherStatus = (state) => state.weather.status;

export const selectedTown = (state, country) => state.weather.weather.find(
  (town) => town.name === country,
);

export default townSlice.reducer;
