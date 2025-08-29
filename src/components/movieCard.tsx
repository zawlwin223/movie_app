import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Bookmark } from 'lucide-react'

export default function MovieCard() {
  return (
    <Card className="w-[170px] h-[350px] bg-transparent shadow-card p-0 border-0 outline-0 overflow-hidden">
      {/* Header with full image */}
      <CardHeader className="p-0 h-[70%] overflow-hidden rounded-t-lg flex">
        <img
          src="https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
      </CardHeader>

      {/* Footer with movie info */}
      <CardFooter className="flex flex-col items-start bg-transparent p-2 h-[30%]">
        <CardTitle className="text-sm font-bold truncate w-full flex justify-between items-center">
          <span>Movie Title</span>
          <Bookmark className="stroke-primary" strokeWidth={1}></Bookmark>
        </CardTitle>
        <span className="text-xs text-gray-400 my-1">Rating:7.8</span>
        <span className="text-xs text-gray-400">Release Date: 2023-10-01</span>
      </CardFooter>
    </Card>
  )
}
