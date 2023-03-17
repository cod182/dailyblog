import Image from 'next/image'
import React from 'react'

const Logo = (props: any) => {
  const {renderDefault, title} = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        alt="logo"
        src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
      />
      <>{renderDefault && renderDefault(props)}</>
    </div>
  )
}

export default Logo
