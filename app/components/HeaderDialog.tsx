import Image from 'next/image'
import React from 'react'

const vehicles = [{
    firstCol: [
        { title: 'Model S', imgUrl: '/vehicles/modelS.avif', learnAndOrder: true },
        { title: 'Model 3', imgUrl: '/vehicles/model3.avif', learnAndOrder: true },
        { title: 'Model X', imgUrl: '/vehicles/modelX.avif', learnAndOrder: true },
        { title: 'Model Y', imgUrl: '/vehicles/modelY.avif', learnAndOrder: true },
        { title: 'Cybertruck', imgUrl: '/vehicles/cybertruck.avif', learnAndOrder: true },
        { title: 'Help Me Choose', imgUrl: '/vehicles/helpMe.png', learnAndOrder: false },
    ],
    secondCol: ['Inventory', 'Used Cars', 'Demo Drive', 'Trade-in', 'Compare', ' Fleet', 'Semi', 'Roadster']
}]

const energy = [{
    firstCol: [
        { title: 'Solar Panels', imgUrl: '/energy/solarPanels.avif', learnAndOrder: true },
        { title: 'Solar Roof', imgUrl: '/energy/solarRoof.avif', learnAndOrder: true },
        { title: 'Powerwall', imgUrl: '/energy/powerwall.avif', learnAndOrder: true },
        { title: 'Megapack', imgUrl: '/energy/megapack.avif', learnAndOrder: true },
    ],
    secondCol: ['Schedule a Consultation', ' Why Solar', 'Incentives', 'Support', 'Partner with Tesla', 'Commercial', 'Utilities']
}]

const charging = [{
    firstCol: [
        { title: 'Charging', imgUrl: '/charging/charging.avif', learnAndOrder: true },
        { title: 'Home Charging', imgUrl: '/charging/homeCharging.avif', learnAndOrder: true },
        { title: 'Supercharging', imgUrl: '/charging/supercharging.avif', learnAndOrder: true },
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
                ${showId === 'vehicles' ? 'mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : ''}`}>
                <div className='col-start-2 col-end-9  w-full flex flex-wrap gap-4'>
                    {vehicles[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                            />
                            <div className='text-center'>
                                <p>{item.title}</p>
                                <div>
                                    {item.learnAndOrder
                                        ?
                                        <div>
                                            <span>Learn</span>
                                            <span>Order</span>
                                        </div>
                                        :
                                        <span>Get Started</span>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 w-full pt-2'>
                    {vehicles[0].secondCol.map((item: any, index: number) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300 
                ${showId === 'energy' ? 'mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : ''} `}>
                <div className='col-start-2 col-end-9  w-full flex flex-wrap gap-4'>
                    {energy[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                            />
                            <div className='text-center'>
                                <p>{item.title}</p>
                                <div>
                                    {item.learnAndOrder
                                        ?
                                        <div>
                                            <span>Learn</span>
                                            <span>Order</span>
                                        </div>
                                        :
                                        <span>Get Started</span>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 w-full pt-2'>
                    {energy[0].secondCol.map((item: any, index: number) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'charging' ? 'mt-12 pt-12 pb-12  opacity-100 max-h-[96vh]' : ''}`}>
                <div className='col-start-2 col-end-9  w-full flex flex-wrap gap-4'>
                    {charging[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                            />
                            <div className='text-center'>
                                <p>{item.title}</p>
                                <div>
                                    {item.learnAndOrder
                                        ?
                                        <div>
                                            <span>Learn</span>
                                            <span>Order</span>
                                        </div>
                                        :
                                        <span>Get Started</span>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />

                <ul className=' col-start-10 col-end-12 w-full pt-2'>
                    {charging[0].secondCol.map((item: any, index: number) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'discover' ? 'mt-12 pt-12 pb-12  opacity-100 max-h-[96vh]' : ''}`}>
                <div className='col-start-4 col-end-10 w-full grid grid-cols-3'>
                    {discover.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col gap-2'>
                            <h2>{item.title}</h2>
                            <div className='flex flex-col'>
                                {item.items.map((i: any) =>
                                    <p>{i}</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
            </div>

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'shop' ? 'mt-12 pt-12 pb-12 opacity-100 max-h-[96vh]' : ''}`}>
                <div className='col-start-3 col-end-11 w-full grid grid-cols-4'>
                    {shop.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col justify-center items-center gap-2'>
                            <Image
                                src={item.imgUrl}
                                width={220}
                                height={120}
                                alt={item.title}
                            />
                            <h2>{item.title}</h2>
                        </div>
                    )}
                </div>
                <div className='col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
            </div>

        </dialog>
    )
}

export default HeaderDialog