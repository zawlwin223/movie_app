import Switcher from './switch'
import MovieCard from './movieCard'
export default function Trending() {
  return (
    <section className="mt-5">
      <div className="flexRowLayout ">
        <h1 className="text-[1.5rem]">Trending</h1>
        <Switcher
          toggleData={{ data1: 'Today', data2: 'This Week' }}></Switcher>
      </div>
      <div className="flexRowLayout mt-[1.5rem]">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </section>
  )
}
