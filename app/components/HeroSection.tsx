import Image from 'next/image'
import React from 'react'

interface Props {
  title?: string,
  subtitle?: string,
  paragraph?: string,
  bottomParagraph?: string,
  imageUrl?: string,
  videoUrl?: string,
  posterUrl?: string
  button1: string,
  button2?: string
  buttonColor: string,
  color: string,
}

const HeroSection = ( {title, subtitle, paragraph, bottomParagraph, imageUrl, videoUrl, posterUrl, button1, button2,  buttonColor, color} : Props) => {
  return (
    <section className={`relative h-screen overflow-x-hidden flex ${color === 'white' ? 'text-white' : 'text-black'} snap-center`}>
      <div className='z-0 w-full relative flex flex-col text-center'>
        <h1 className='flex-none text-5xl font-semibold px-6 mt-40'>{title}</h1>
        <h2 className='flex-none text-[20px] font-medium px-6 pt-[6px] '>{subtitle}</h2>
        <p className='flex-none text-xs  font-medium px-6 pb-[14px]'>{paragraph}</p>

        <div className='grow flex flex-col justify-end items-center'>
          <div className={`w-[600px] flex flex-col sm:flex-row gap-4 py-4 px-6 mb-4 ${!button2 && 'justify-center'}`}>
            <button className={`basis-1/2 rounded-md backdrop-blur py-1 border-[3px] ${buttonColor === 'dark' && 'bg-[#222222CC] border-none'} 
              ${buttonColor === 'light' && 'bg-white/60 text-black border-none'}`}>
              <span className='text-[14px] font-semibold'>{button1}</span>
            </button>
            {button2 && <button className={`basis-1/2 rounded-md backdrop-blur py-2 ${buttonColor === 'dark' ? 'bg-white/60 text-black' : 'bg-[#222222CC] text-white'} `}>
              <span className='text-[14px] font-semibold '>{button2}</span>
            </button>
            }
          </div>
          <p className='text-[12px] text-center px-6 pb-4'>
            {bottomParagraph}
          </p>
        </div>
      </div>

      { videoUrl && 
        <video autoPlay muted loop src={videoUrl} poster={posterUrl} className='-z-10 absolute h-full w-full object-cover object-center' ></video>
      }
      { imageUrl &&
        <Image src={imageUrl} alt='asd' fill className='-z-10 absolute h-full w-full object-cover object-center'/>
      }
            
    </section>
  )
}

export default HeroSection