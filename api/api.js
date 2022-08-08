import { API_KEY } from '@env';

import axios from 'axios';

export const BASE_URL = 'https://newsapi.org/v2/top-headlines';
export const getNewsAPI = (country = 'in') =>
  `${BASE_URL}?country=${country}&pageSize=100&apiKey=${API_KEY}`;
