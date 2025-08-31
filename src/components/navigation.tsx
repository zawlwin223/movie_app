'use client'
import { ModeToggle } from '@/components/modeTogeller'
import { Input } from '@/components/ui/input'
import { SelectDemo } from '@/components/select'
import { useSelector } from 'react-redux'
import { useFetchGenres } from '@/hooks/useFetchData'
export default function Navigation() {
  const filmState = useSelector(
    (state: any) => state.filmToWatchSwitch.filmToWatchState
  )
  const { data, isLoading, error } = useFetchGenres(filmState)
  console.log('genres data', data)
  return (
    <nav className="pt-4 flex justify-between items-center">
      <h1 className="text-gradient font-bold text-[3rem]">Movie Site</h1>
      <div className="flexRowLayout ">
        <Input
          type="text"
          className="ps-3 py-2 w-[350px]"
          placeholder="Search For Movie"
        />

        <SelectDemo
          title={'Genres'}
          placeHolder={`Select ${filmState} Genres`}
          data={data}></SelectDemo>
        {/* <SelectDemo title={'Years'} placeHolder={'Select Year'}></SelectDemo> */}

        <a href="">WatchList</a>
      </div>
      <div className="flexRowLayout">
        <button>SignIn</button>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  )
}
