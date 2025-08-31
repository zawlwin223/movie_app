import { api } from '../lib/axios'
import { useQuery } from '@tanstack/react-query'
export function useFetchTrendingMovies(state: string) {
  const stateParam = state === 'Today' ? 'day' : 'week'
  return useQuery({
    queryKey: ['movies', 'trending', stateParam],
    queryFn: async () => {
      console.log('Fetching movies...')
      const response = await api.get(
        `trending/all/${stateParam}?language=en-US`
      )

      return response.data.results
    },
  })
}

export function useFetchMoviesOrSeries(type: string, params?: any) {
  console.log('params in useFetchMoviesOrSeries', params)
  return useQuery({
    queryKey: [type, params],
    queryFn: async () => {
      console.log('Fetching movies...')
      const response = await api.get(`discover/${type}`, { params })
      console.log('movies or series response', response)
      return response.data
    },
  })
}

export function useFetchGenres(type: string) {
  return useQuery({
    queryKey: ['Genres', type],
    queryFn: async () => {
      const response = await api.get(`genre/${type}/list?language=en`)
      console.log('genres response', response)
      return response.data.genres
    },
  })
}
