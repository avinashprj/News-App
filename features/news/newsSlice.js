import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Appearance } from 'react-native';
import { getNewsAPI } from '../../api/api';

const colorScheme = Appearance.getColorScheme();

export const getNews = createAsyncThunk(
  '/news/getAllNews',
  async (_, { rejectWithValue }) => {
    try {
      const URL = getNewsAPI();
      const response = await axios.get(URL);
      return response.data.articles;
    } catch (error) {
      // console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: 'global',
  initialState: {
    news: [],
    index: 1,
    darkTheme: colorScheme === 'dark',
    authUser: false,
    authError: null,
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
  extraReducers: {
    [getNews.fulfilled]: (state, action) => {
      state.news = action.payload;
      state.newsStatus = 'fulfilled';
    },
    [getNews.pending]: (state, action) => {
      state.newsStatus = 'pending';
    },
    [getNews.rejected]: (state, action) => {
      state.newsError = action.payload;
      state.newsStatus = 'idle';
    },
  },
});

export const newsReducer = newsSlice.reducer;
export const { logoutUser, setAuthUser } = newsSlice.actions;
