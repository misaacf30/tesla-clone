import Image from 'next/image'

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

const HeroSection = ({ title, subtitle, paragraph, bottomParagraph, imageUrl, videoUrl, posterUrl, button1, button2, buttonColor, color }: Props) => {
  return (
    <section className={`relative h-screen overflow-x-hidden flex ${color === 'white' ? 'text-white' : 'text-[#171A20]'} snap-center`}>
      <div className='z-0 w-full relative flex flex-col text-center'>
        <h1 className='flex-none text-5xl font-semibold px-6 mt-40'>{title}</h1>
        <h2 className='flex-none text-[20px] font-medium px-6 pt-[6px] '>{subtitle}</h2>
        <p className='flex-none text-xs  font-medium px-6 pb-[14px]'>{paragraph}</p>

        <div className='grow flex flex-col justify-end items-center'>
          <div className='w-full min-[600px]:w-[600px] py-4 px-6 mb-4'>
            <div className='flex flex-col min-[600px]:flex-row justify-center gap-x-[24px] gap-y-[16px]'>
              <button className={`backdrop-blur border-[3px]  rounded-[4px] relative flex justify-center
                py-[4px] px-[24px] min-w-[264px] ${buttonColor === 'dark' && 'bg-[#222222CC] border-transparent'} 
                ${buttonColor === 'light' && 'bg-white/60 text-[#171A20] border-transparent'}`}
              >
                <span className='w-full min-[600px]:w-[210px] text-[14px] font-semibold'>
                  {button1}
                </span>
              </button>
              {button2 &&
                <button className={`backdrop-blur border-[3px] border-transparent rounded-[4px] relative  flex justify-center
                  py-[4px] px-[24px] min-w-[264px] ${buttonColor === 'dark' ? 'bg-white/60 text-[#171A20]' : 'bg-[#222222CC] text-white'} `}
                >
                  <span className='w-full min-[600px]:w-[210px] text-[14px] font-semibold'>
                    {button2}
                  </span>
                </button>
              }
            </div>
          </div>
          <p className='text-[12px] text-center px-6 pb-4'>
            {bottomParagraph}
          </p>
        </div>
      </div>

      {videoUrl &&
        <video autoPlay muted loop src={videoUrl} poster={posterUrl} className='-z-10 absolute h-full w-full object-cover object-center' ></video>
      }
      {imageUrl &&
        <Image src={imageUrl} alt='asd' fill className='-z-10 absolute h-full w-full object-cover object-center' />
      }

    </section>
  )
}

export default HeroSection