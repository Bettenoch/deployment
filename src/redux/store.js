import { configureStore } from '@reduxjs/toolkit';

import townSlice from './AppSlice';

const store = configureStore({
  reducer: {
    weather: townSlice,
  },
});

export default store;
