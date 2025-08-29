import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTM3NDVhNWM5YzFiZmQ0Mzg0YzczM2E0ZTg0ZTFiNyIsIm5iZiI6MTc1NjE5MzUwNi40ODg5OTk4LCJzdWIiOiI2OGFkNjJlMjJjZjkwNGFlODlhOWFiY2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.McfyaCo7S2h3v1ae2TlAqd1ZEw02bcInnuLNOm9QfBY',
  },
  // params: {
  //   api_key: process.env.API_KEY,
  // },
})
