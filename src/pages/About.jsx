import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-2xl ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Darl, where fashion meets convenience and quality. At Darl, we believe that style should be accessible to everyone, no matter your budget or taste. That’s why we offer a wide range of trendy and affordable clothing options, carefully curated to suit every occasion and personality. From everyday essentials to statement pieces, our collection is designed to help you express yourself and feel confident in what you wear.</p>
          <p>Our journey started with a simple idea: to create a shopping experience that is as enjoyable and seamless as possible. We focus on quality, comfort, and customer satisfaction, ensuring that every piece in our collection not only looks great but also feels great to wear. Our team is passionate about fashion and dedicated to staying ahead of the latest trends, so you can always find something new and exciting at Darl.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Darl, we’re more than just a clothing store—we’re a community of fashion enthusiasts who celebrate self-expression through style. We are dedicated to providing exceptional customer service, fast shipping, and a seamless shopping experience. Discover clothing you love, effortlessly.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 rounded-2xl '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3  '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
