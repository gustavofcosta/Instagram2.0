import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline"

import { HeartIcon as HeartIconFiled } from "@heroicons/react/solid"

interface PropsPosts {
  id: string,
  username: string,
  userImg: string,
  img: string,
  caption: string,
}


function Post({ username, userImg, img, caption }: PropsPosts) {
  return (
    <div className='bg-white my-3 border rounded-sm'>

      {/* Header */}
      <div className='flex items-center p-1.5'>
        <img
          className='rounded-full h-9 w-9 border-red-500 object-cover border-2 p-0.5 mr-3'
          src={userImg}
          alt="" />
        <p className='flex-1 text-sm font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-4' />
      </div>

      {/* img */}
      <img
        className='object-cover w-full'
        src={img} alt="" />


      {/* Buttons */}
      <div className='flex justify-between px-4 pt-2'>
        <div className='flex space-x-3'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn rotate-45' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/* Caption */}
      <div className='pt-4 px-4 truncate'>
        <span className='font-bold mr-2'>
          {username}
        </span>
        {caption}
      </div>

      {/* Comments */}

      {/* ipunt box */}
      <form className='flex items-center py-2 px-4'>
        <EmojiHappyIcon className='h-6 cursor-pointer' />
        <input
          className='border-none flex-1 focus:ring-0 outline-none'
          placeholder='Comentar'
          type="text" />
        <button className='font-semibold text-blue-400'>
          Post
        </button>
      </form>

    </div>
  )
}

export default Post
