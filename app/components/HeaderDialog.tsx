import Image from 'next/image'

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

const navItems = [
    { title: 'Vehicles', id: 'vehicles' },
    { title: 'Energy', id: 'energy' },
    { title: 'Charging', id: 'charging' },
    { title: 'Discover', id: 'discover' },
    { title: 'Shop', id: '' },
    { title: 'Support', id: '' },
    {
        title:
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <div className='flex flex-col pl-[12px]'>
                    <span>United States</span>
                    <span className='text-[14px] font-normal text-[#5C5E62]'>English</span>
                </div>
            </div>,
        id: ''
    },
    {
        title:
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className='pl-[12px]'>Account</span>
            </div>,
        id: ''
    }
]

interface Props {
    show: boolean,
    showId: string,
    setShow: (show: boolean) => void,
    setShowId: (showId: string) => void,
}

{/* eval('vehicles') ===> vehicles */ }

const HeaderDialog = ({ show, showId, setShow, setShowId }: Props) => {
    return (
        <dialog className={`z-30 xl:z-20 w-[100vw] flex flex-col overflow-hidden ${show && 'h-[100svh] sm:h-[100vh] xl:h-auto xl:max-h-[90vh]'}`}
            onMouseLeave={() => { setShowId(''); setShow(false) }}
        >
            {/* Dialog Header for Mobile or < 1200px */}
            <header className={`z-40 w-full flex justify-between items-center order-first p-[16px] xl:hidden ${show === false && 'hidden'} duration-500`}>
                <button
                    onClick={() => { setShowId(''); setShow(true) }}
                    className={`${showId === '' && 'hidden'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <h2 className='text-[14px] font-semibold'>
                    {showId && showId[0].toUpperCase() + showId.slice(1)}
                </h2>
                <button
                    onClick={() => { setShow(false), setShowId('') }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </header>

            {/* Navigation Ittems for Mobile or < 1200px */}
            <ol className={`z-40 xl:hidden flex flex-col h-[100svh] sm:h-[100vh] w-full overflow-auto pt-[16px] text-[17px] text-[#171A20] 
                font-semibold duration-500 ${(showId !== '' || show === false) ? 'hidden' : 'order-first'} `}
            >
                {navItems.map((item, index) =>
                    <li key={index} className='mx-[20px] mb-[16px]'>
                        <button
                            className='hover:bg-[#e3e3e2]/50 w-full flex hover:rounded-[4px] px-[8px] py-[16px]'
                            onClick={() => setShowId(item.id)}
                        >
                            <span className=' w-full text-start flex-grow mx-[4px]'>
                                {item.title}
                            </span>
                            {item.id !== '' &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            }

                        </button>

                    </li>
                )}
            </ol>

            {/* Vehicles */}
            <div className={`w-full xl:grid grid-cols-12 px-[32px] xl:px-12 opacity-0 max-h-0 duration-300
                ${showId === 'vehicles' ? 'order-first xl:mt-12 py-2 xl:py-12 opacity-100 max-h-[100svh] sm:h-[100vh] xl:max-h-[90vh]' : 'max-h-0'} 
                *mobile>* flex flex-col overflow-auto divide-y-[1px] xl:divide-y-0`}
            >
                <div className='col-start-2 col-end-9 grid xl:grid-cols-3 2xl:grid-cols-4 content-start gap-4
                    *mobile>* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[32px] xl:py-0'
                >
                    {vehicles[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex sm:flex-col justify-start sm:justify-center items-center'>
                            <div className='flex justify-end overflow-hidden'>
                                <Image
                                    src={item.imgUrl}
                                    width={220}
                                    height={120}
                                    alt={item.title}
                                    className='max-w-[180px] sm:max-w-[220px]'
                                />
                            </div>

                            <div className='flex flex-col sm:text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[14px] xl:text-[12px] font-medium space-x-4 underline underline-offset-2'>
                                    {item.getStarted
                                        ?
                                        <span>Get Started</span>
                                        :
                                        <>
                                            <span>Learn</span>
                                            <span>Order</span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='hidden xl:block col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
                <ul className=' col-start-10 col-end-12 w-full pt-[16px] pb-[16px] xl:pt-[8px] xl:pb-0'>
                    {vehicles[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[17px] xl:text-[14px] font-semibold mb-3 
                            *mobile>* py-[16px] xl:py-0'>
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            {/* Energy */}
            <div className={`w-full xl:grid grid-cols-12 px-[32px] xl:px-12 opacity-0 max-h-0 duration-300
                ${showId === 'energy' ? 'order-first xl:mt-12 py-2 xl:py-12 opacity-100 max-h-[100svh] sm:h-[100vh] xl:max-h-[90vh]' : 'max-h-0'} 
                *mobile>* flex flex-col overflow-auto divide-y-[1px] xl:divide-y-0`}
            >
                <div className='col-start-2 col-end-9 grid xl:grid-cols-3 2xl:grid-cols-4 content-start gap-4
                    *mobile>* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[32px] xl:py-0'
                >
                    {energy[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex sm:flex-col justify-start sm:justify-center items-center'>
                            <div className='flex justify-end overflow-hidden'>
                                <Image
                                    src={item.imgUrl}
                                    width={220}
                                    height={120}
                                    alt={item.title}
                                    className='max-w-[180px] sm:max-w-[220px]'
                                />
                            </div>

                            <div className='flex flex-col sm:text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[14px] xl:text-[12px] font-medium space-x-4 underline underline-offset-2'>
                                    <span>Learn</span>
                                    <span>Order</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='hidden xl:block col-start-9 col-end-10 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
                <ul className=' col-start-10 col-end-12 w-full pt-[16px] pb-[16px] xl:pt-[8px] xl:pb-0'>
                    {energy[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[17px] xl:text-[14px] font-semibold mb-3 
                            *mobile>* py-[16px] xl:py-0'>
                            {item}</li>
                    )}
                </ul>
            </div>

            {/* Charging */}
            <div className={`w-full xl:grid grid-cols-12 px-[32px] xl:px-12 opacity-0 max-h-0 duration-300
                ${showId === 'charging' ? 'order-first xl:mt-12 py-2 xl:py-12 opacity-100 max-h-[100svh] sm:h-[100vh] xl:max-h-[90vh]' : 'max-h-0'} 
                *mobile>* flex flex-col overflow-auto divide-y-[1px] xl:divide-y-0`}
            >
                <div className='col-start-2 col-end-9 2xl:col-start-3 2xl:col-end-8 grid xl:grid-cols-3 content-start gap-4
                    *mobile>* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[32px] xl:py-0'
                >
                    {charging[0].firstCol.map((item: any, index: number) =>
                        <div key={index} className='flex sm:flex-col justify-start sm:justify-center items-center'>
                            <div className='flex justify-end overflow-hidden'>
                                <Image
                                    src={item.imgUrl}
                                    width={220}
                                    height={120}
                                    alt={item.title}
                                    className='max-w-[180px] sm:max-w-[220px]'
                                />
                            </div>

                            <div className='flex flex-col sm:text-center'>
                                <p className='text-[17px] font-semibold'>{item.title}</p>
                                <div className='text-[#5C5E62] text-[14px] xl:text-[12px] font-medium space-x-4 underline underline-offset-2'>
                                    <span>Learn</span>
                                    {item.learnAndShop &&
                                        <span>Shop</span>
                                    }
                                    {item.learnAndFind &&
                                        <span>Find</span>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='hidden xl:block col-start-9 col-end-10 2xl:col-start-8 2xl:col-end-9 h-full w-[1px] bg-[#e3e3e2] justify-self-center' />
                <ul className=' col-start-10 col-end-12 2xl:col-start-9 2xl:col-end-11 w-full pt-[16px] pb-[16px] xl:pt-[8px] xl:pb-0'>
                    {charging[0].secondCol.map((item: any, index: number) =>
                        <li key={index} className='text-[17px] xl:text-[14px] font-semibold mb-3 
                            *mobile>* py-[16px] xl:py-0'>
                            {item}</li>
                    )}
                </ul>
            </div>

            {/* Discover */}
            <div className={`w-full xl:grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-auto duration-300
                ${showId === 'discover' ? 'order-first pt-[16px] pb-[16px] xl:mt-12 xl:pt-12 xl:pb-12 opacity-100 max-h-[100svh] sm:h-[100vh] xl:max-h-[90vh]' : 'max-h-0'}`}
            >
                <div className='col-start-4 col-end-10 w-full grid grid-cols-1 xl:grid-cols-3'>
                    {discover.map((item: any, index: number) =>
                        <div key={index} className='flex flex-col text-[14px]'>
                            <h2 className='text-[#5C5E62] font-medium px-3 pb-[14px] hidden xl:block'>{item.title}</h2>
                            <ul className='flex flex-col font-semibold px-3 xl:py-2'>
                                {item.items.map((itm: any, index: number) =>
                                    <li key={index} className='text-[17px] xl:text-[14px] py-[16px] xl:py-0 xl:mb-3'>{itm}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Shop */}
            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'shop' ? 'order-first mt-12 pt-12 pb-12 opacity-100 xl:max-h-[90vh]' : 'max-h-0'}`}
            >
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