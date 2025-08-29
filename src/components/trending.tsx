'use client'
import Switcher from './switch'
import MovieCard from './movieCard'
import { useFetchTrendingMovies } from '@/hooks/useFetchData'
import SliderComponent from './slider'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
export default function Trending() {
  const trendingState = useSelector((state: any) => state.switch.trendingState)
  console.log('trending state from redux', trendingState)
  const { data, isLoading, error } = useFetchTrendingMovies(trendingState)
  console.log('trending state from redux', data)
  return (
    <section className="mt-5">
      <div className="flexRowLayout ">
        <h1 className="text-[1.5rem]">Trending</h1>
        <Switcher
          toggleData={{ data1: 'Today', data2: 'This Week' }}></Switcher>
      </div>
      {/* <div className="flexRowLayout mt-[1.5rem] w-full"> */}
      <SliderComponent>
        {data?.map((movie: any) => {
          return <MovieCard movie={movie}></MovieCard>
        })}
      </SliderComponent>
      {/* </div> */}
    </section>
  )
}
