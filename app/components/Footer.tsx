import React from 'react'

const Footer = () => {
    return (
        <footer className='z-30 w-full bg-black min-[600px]:bg-transparent relative min-[600px]:absolute min-[600px]:bottom-0 snap-center min-[600px]:snap-none'>
            <ul className='flex flex-col min-[600px]:flex-row justify-center items-center text-[12px] text-[#D0D1D2] font-semibold 
                px-[24px] pt-[12px] pb-[24px] min-[600px]:pt-0 min-[600px]:pb-0 [&>li]:py-[8px] '
            >
                <li className='min-[600px]:mr-[14px]'>Tesla © 2023</li>
                <li className='min-[600px]:mr-[14px]'>Privacy & Legal</li>
                <li className='min-[600px]:mr-[14px]'>Vehicle Recalls</li>
                <li className=''>News</li>
            </ul>
        </footer>
    )
}

export default Footer