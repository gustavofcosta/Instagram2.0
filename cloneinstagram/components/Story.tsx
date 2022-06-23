import React from 'react'

interface Props {
  img: string,
  username: string,
}

function Story({ img, username }: Props) {
  return (
    <div>
      <img className='rounded-full p-[1px] border-red-500 border-2 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-in-out'
        src={img}
        alt=''
      />
      <p className='text-xs w-14 truncate text-center mt-1' >
        {username}
      </p>
    </div>
  )
}

export default Story
