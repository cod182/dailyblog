import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 text-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link
          href="www.google.co.uk"
          target="_blank"
          className="px-5 py-3 text-sm md:text-base bg-gray-300 text-[#000] flex items-center rounded-full text-center hover:bg-gray-500 hover:text-[#F7AB0A]"
        >
          Sign Up
        </Link>
      </div>
    </header>
  )
}

export default Header
