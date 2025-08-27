import Navigation from '@/components/navigation'
import Trending from '@/components/trending'
import MainFilm from '@/components/mainFilm'
import PaginationComponent from '@/components/pagination'
export default function HomePage() {
  return (
    <>
      <Navigation></Navigation>
      <Trending></Trending>
      <MainFilm></MainFilm>
      <PaginationComponent></PaginationComponent>
    </>
  )
}
