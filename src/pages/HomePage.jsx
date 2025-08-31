import Navigation from '@/components/navigation'
import Trending from '@/components/trending'
import MainFilm from '@/components/mainFilm'
import PaginationComponent from '@/components/pagination'
export default function HomePage() {
  return (
    <>
      <Navigation></Navigation>

      <div className="px-2">
        <Trending></Trending>
        <MainFilm></MainFilm>
      </div>
    </>
  )
}
