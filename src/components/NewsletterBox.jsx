import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 30% off</p>
      <p className='text-gray-400 mt-3'>" Discover your style. Shop effortlessly. Love every piece." </p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-xl'>
        <input className='w-full sm:flex-1 outline-none ' type="text" placeholder='Enter your Email' required />
        <button className='bg-black text-white text-xs px-10 py-4 rounded-xl' type='submit'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox
