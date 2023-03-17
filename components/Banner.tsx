import React from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">
          Welcome to{' '}
          <span className="underline decoration-4 decoration-[#ff9f29]">Codie's Blog</span>
        </h1>
        <h2 className="lg:px-2 mt-5 md:mt-0">It's nice to meet you!</h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">The start of something...</p>
    </div>
  )
}

export default Banner
