'use client'
import Switcher from './switch'

import MovieCard from './movieCard'
import { useFetchMoviesOrSeries } from '@/hooks/useFetchData'
import { useSelector } from 'react-redux'
import PaginationComponent from './pagination'
import { useState } from 'react'

export default function MainFilm() {
  const [pagination, setPagination] = useState<number>(1)
  const filmState = useSelector(
    (state: any) => state.filmToWatchSwitch.filmToWatchState
  )
  const genreState = useSelector((state: any) => state.genreSelect.genreState)

  const param = {
    page: pagination,
    with_genres: genreState === 'All' ? '' : genreState,
  }
  const { data, isLoading, error } = useFetchMoviesOrSeries(filmState, param)
  return (
    <>
      <section className="mt-5">
        <div className="flexRowLayout ">
          <h1 className="text-[1.5rem]">Film To Watch</h1>
          <Switcher
            toggleData={{ data1: 'Movies', data2: 'Series' }}></Switcher>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-[1.5rem]">
          {data?.results.map((movie: any) => {
            return <MovieCard movie={movie} key={movie.id}></MovieCard>
          })}
        </div>
      </section>

      <PaginationComponent
        pagination={(page) => setPagination(page)}
        totalPages={500}></PaginationComponent>
    </>
  )
}
