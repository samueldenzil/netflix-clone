import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal, setBannerMovie } from '../store/features/modal/modalSlice'
import { setMovie } from '../store/features/movie/movieSlice'
import { Movie } from '../typings'

interface Props {
  // When using firebase
  // movie: Movie | DocumentData
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const dispatch = useDispatch()

  return (
    <div
      className="hover:scale-115 md:h36 relative h-28 min-w-[180px] cursor-pointer duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        dispatch(openModal())
        dispatch(setBannerMovie(movie))
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
