import React from 'react'
import Link from 'next/link'

import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const StudioNavBar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#FFA500] flex item-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#FFA500]" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#FFA500]">
          <h1>Hello there!</h1>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavBar
