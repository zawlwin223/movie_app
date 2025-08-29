'use client'
import Switcher from './switch'

import MovieCard from './movieCard'
import { useFetchTrendingMovies } from '@/hooks/useFetchData'

export default function MainFilm() {
  const { data, isLoading, error } = useFetchTrendingMovies()
  return (
    <section className="mt-5">
      <div className="flexRowLayout ">
        <h1 className="text-[1.5rem]">Film To Watch</h1>
        <Switcher toggleData={{ data1: 'Movies', data2: 'Series' }}></Switcher>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[1.5rem]">
        {data?.map((movie: any) => {
          return <MovieCard movie={movie}></MovieCard>
        })}
      </div>
    </section>
  )
}
