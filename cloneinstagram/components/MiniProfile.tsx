import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='w-16 h-16 object-cover rounded-full border p-[2px]'
        src="/women.jpg" alt="" />

      <div>
        <h2>Mushashi</h2>
        <h3>Bem-vindo ao Instagram</h3>
      </div>

    </div>
  )
}

export default MiniProfile
