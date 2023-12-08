import Image from 'next/image'
import React from 'react'

const vehicles = [{
    firstCol: [
        { title: 'Model S', imgUrl: '/vehicles/modelS.avif' },
        { title: 'Model 3', imgUrl: '/vehicles/model3.avif' },
        { title: 'Model X', imgUrl: '/vehicles/modelX.avif' },
        { title: 'Model Y', imgUrl: '/vehicles/modelY.avif' },
        { title: 'Cybertruck', imgUrl: '/vehicles/cybertruck.avif' },
        { title: 'Help Me Choose', imgUrl: '/vehicles/helpMe.png', getStarted: true },
    ],
    secondCol: ['Inventory', 'Used Cars', 'Demo Drive', 'Trade-in', 'Compare', ' Fleet', 'Semi', 'Roadster']
}]

const energy = [{
    firstCol: [
        { title: 'Solar Panels', imgUrl: '/energy/solarPanels.avif' },
        { title: 'Solar Roof', imgUrl: '/energy/solarRoof.avif' },
        { title: 'Powerwall', imgUrl: '/energy/powerwall.avif' },
        { title: 'Megapack', imgUrl: '/energy/megapack.avif' },
    ],
    secondCol: ['Schedule a Consultation', ' Why Solar', 'Incentives', 'Support', 'Partner with Tesla', 'Commercial', 'Utilities']
}]

const charging = [{
    firstCol: [
        { title: 'Charging', imgUrl: '/charging/charging.avif' },
        { title: 'Home Charging', imgUrl: '/charging/homeCharging.avif', learnAndShop: true },
        { title: 'Supercharging', imgUrl: '/charging/supercharging.avif', learnAndFind: true },
    ],
    secondCol: ['Charging Calculator', ' Trip Planner', 'Supercharger Voting', 'Host a Supercharger', 'Comercial Charging', 'Host Wall Connectors']
}]

const discover = [
    { title: 'Resources', items: ['Demo Drive', 'Insurance', 'Video Guides', 'Customer Stories', 'Events'] },
    { title: 'Location Services', items: ['Find Us', 'Trip Planner', 'Find a Collision Center', 'Find a Certified Installer'] },
    { title: 'Company', items: ['About', 'Careers', 'Investor Relations'] },
]

const shop = [
    { title: 'Charging', imgUrl: '/shop/charging.avif' },
    { title: 'Vehicle Accesories', imgUrl: '/shop/vehicleAccesories.avif' },
    { title: 'Apparel', imgUrl: '/shop/apparel.avif' },
    { title: 'Lifestyle', imgUrl: '/shop/lifestyle.avif' },
]

interface Props {
    show: boolean,
    showId: string,
}

{/* eval('vehicles') ===> vehicles */ }

const HeaderDialog = ({ showId, show }: Props) => {
    return (
        <dialog className={`z-20 w-full flex flex-col overflow-hidden max-h-0 opacity-0 duration-500
        ${show ? 'max-h-[96vh] opacity-100' : ''}`}>
            {/* pb-12 */}
            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'vehicles' ? 'order-first mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : 'max-h-0'} `}>
                <div className='col-start-2 col-end-9 grid grid-cols-3 xl:grid-cols-4 content-start gap-4'>
                    {vehicles[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                                className='max-w-[220px]'
                            />
                            <div className='text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[12px] space-x-4 underline'>
                                    <span>Learn</span>
                                    <span>Order</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 w-full pt-2'>
                    {vehicles[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[14px] font-semibold mb-3 '>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300 
                ${showId === 'energy' ? 'order-first mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : 'max-h-0'} `}>
                <div className='col-start-2 col-end-9 grid grid-cols-3 xl:grid-cols-4 content-start gap-4'>
                    {energy[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                                className='max-w-[220px]'
                            />
                            <div className='text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[12px] space-x-4 underline'>
                                    <span>Learn</span>
                                    <span>Order</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 w-full pt-2'>
                    {energy[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[14px] font-semibold mb-3 '>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'charging' ? 'order-first  mt-12 pt-12 pb-12  opacity-100 max-h-[96vh]' : 'max-h-0'}`}>
                <div className='col-start-2 col-end-9 xl:col-start-3 xl:col-end-8 grid grid-cols-3 content-start  gap-4'>
                    {charging[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                                className='max-w-[220px]'
                            />
                            <div className='text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[12px] space-x-4 underline'>
                                    <span>Learn</span>
                                    {item.learnAndShop &&
                                        <span>Find</span>
                                    }
                                    {item.learnAndFind &&
                                        <span>Shop</span>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 xl:col-start-8 xl:col-end-9 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 xl:col-start-9 xl:col-end-11 w-full pt-2'>
                    {charging[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[14px] font-semibold mb-3'>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'discover' ? 'order-first mt-12 pt-12 pb-12  opacity-100 max-h-[96vh]' : 'max-h-0'}`}>
                <div className='col-start-4 col-end-10 w-full grid grid-cols-3'>
                    {discover.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col text-[14px]'>
                            <h2 className='text-[#5C5E62] font-medium px-3 pb-[14px]'>{item.title}</h2>
                            <ul className='flex flex-col font-semibold px-3 py-2'>
                                {item.items.map((itm: any, index: number) =>
                                    <li key={index} className='mb-3'>{itm}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'shop' ? 'order-first mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : 'max-h-0'}`}>
                <div className='col-start-3 col-end-11 w-full grid grid-cols-4'>
                    {shop.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col justify-center items-center text-center'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                            />
                            <h2 className='text-[17px] font-semibold pt-2'>{item.title}</h2>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
            </div>
        </dialog >
    )
}

export default HeaderDialog