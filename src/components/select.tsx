import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDispatch } from 'react-redux'
import { setSelectGenre } from '@/store/slice/genreSelectSlice'

export function SelectDemo({
  placeHolder,
  title,
  data,
}: {
  placeHolder: string
  title: string
  data: any
}) {
  const dispatch = useDispatch()

  const handleSelectChange = (value: string) => {
    console.log('selected genre id:', value)
    dispatch(setSelectGenre(value))
  }
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent className=" max-h-[300px] overflow-y-auto">
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          <SelectItem value={'All'}>All</SelectItem>
          {data &&
            data.map((genre: any) => (
              <SelectItem key={genre.id} value={String(genre.id)}>
                {genre.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
