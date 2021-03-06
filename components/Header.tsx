import React from 'react'
import { useState, useEffect } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'

function Header() {
  const { logOut } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanning up the function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          className="cursor-pointer object-contain"
          width="100"
          alt="netflix-logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden h-6 w-6 sm:inline" />
        {/* <Link href="/accounts"> */}
        <img
          onClick={logOut}
          src="https://rb.gy/g1pwyx"
          className="cursor-pointer rounded"
          alt="user-icon"
        />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
