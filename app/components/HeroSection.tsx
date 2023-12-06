import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-screen w-screen flex text-white'>

      <div className='z-0 w-full relative flex flex-col text-center'>
        <h1 className='flex-none text-5xl font-semibold px-6 mt-40'>Model Y</h1>

        <p className='flex-none text-[20px] font-medium px-6 pt-[6px] pb-[14px]'>Lease starting at $399/mo*</p>

        <div className='grow flex flex-col justify-end items-center'>
          <div className='w-[600px] flex flex-col sm:flex-row gap-4 py-4 px-6 mb-4'>
            <button className='basis-1/2 rounded-md bg-[#222222CC] backdrop-blur py-2 '>
              <span className='text-[14px] font-semibold'>Order Now</span>
            </button>
            <button className='basis-1/2 rounded-md bg-white/60 backdrop-blur py-2 '>
              <span className='text-[14px] font-semibold text-black'>Demo Drive</span>
            </button>
          </div>
          <p className='text-[12px] text-center px-6 pb-4'>
            *Excludes taxes and fees with price subject to change. Available in select states.&nbsp;
            <Link href={''} className='underline underline-offset-2'>See Details</Link>
          </p>
        </div>
      </div>

      <video autoPlay muted loop src="/homepage-modelY.mp4" className='-z-10 absolute h-full w-full object-cover object-center' ></video>
    </section>
  )
}

export default HeroSection