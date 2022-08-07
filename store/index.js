import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from '../features/index';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
