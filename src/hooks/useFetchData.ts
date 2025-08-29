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
