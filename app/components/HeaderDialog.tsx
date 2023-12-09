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
    { title: 'Shop', id: 'shop' },
    { title: 'Support', id: 'n' },
    { title: 'United States', id: 'n' },
    { title: 'Account', id: 'n' },
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
        <dialog 
            className={`z-30 xl:z-20 w-[100vw] flex flex-col overflow-hidden ${show && 'h-screen  xl:h-auto'}`}
            onMouseLeave={() => { setShowId(''); setShow(false) }}
        >
            
            {/* Dialog Header for Mobile or < 1200px */}
            <header className={`z-40 w-full flex justify-between items-center order-first p-[16px] xl:hidden ${show === false && 'hidden'} duration-500`}>
                <button
                    onClick={() => {setShowId(''); setShow(true)}}
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
            <ol className={`z-40 xl:hidden flex flex-col h-[100vh] w-full pt-[16px] text-[17px] text-[#171A20] 
                font-semibold [&>li]:mx-[20px] [&>li]:mb-[16px] [&>li>button]:w-full [&>li>button]:flex [&>li>button]:hover:rounded-[4px] 
                [&>li>button]:px-[8px] [&>li>button]:py-[16px] [&>li>button>span]:w-full [&>li>button>span]:text-start 
                [&>li>button>span]:flex-grow [&>li>button>span]:mx-[4px] ${(showId !== '' || show === false) ? 'hidden' : 'order-first'} duration-500`}
            >
                {navItems.map((item, index) =>
                    <li key={index}>
                        <button
                            className='hover:bg-[#e3e3e2]/50 '
                            onClick={() => setShowId(item.id)}
                        >
                            <span>{item.title}</span>
                        </button>

                    </li>
                )}
            </ol>


             {/* Vehicles */}
             <div className={`w-full xl:grid grid-cols-12 px-[32px] xl:px-12 opacity-0 max-h-0 xl:overflow-hidden duration-300
                ${showId === 'vehicles' ? 'order-first xl:mt-12 py-2 xl:py-12 opacity-100 max-h-[90vh]' : 'max-h-0'} 
                    *mobile>* flex flex-col overflow-auto divide-y-[1px] xl:divide-y-0`}>
                <div className='col-start-2 col-end-9 grid xl:grid-cols-3 2xl:grid-cols-4 content-start gap-4
                    *mobile>* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[32px] xl:py-0'>
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
                                <div className='text-[#5C5E62] text-[14px] xl:text-[12px] space-x-4 underline'>
                                    <span>Learn</span>
                                    <span>Order</span>
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
            <div className={`w-full xl:grid grid-cols-12 px-[32px] xl:px-12 opacity-0 max-h-0 xl:overflow-hidden duration-300
                ${showId === 'energy' ? 'order-first xl:mt-12 py-2 xl:py-12 opacity-100 max-h-[90vh]' : 'max-h-0'} 
                    *mobile>* flex flex-col overflow-auto divide-y-[1px] xl:divide-y-0`}>
                <div className='col-start-2 col-end-9 grid xl:grid-cols-3 2xl:grid-cols-4 content-start gap-4
                    *mobile>* grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-[32px] xl:py-0'>
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
                                <div className='text-[#5C5E62] text-[14px] xl:text-[12px] space-x-4 underline'>
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

            <div className={`w-full grid grid-cols-12 px-12 opacity-0 max-h-0 overflow-hidden duration-300
                ${showId === 'charging' ? 'order-first  mt-12 pt-12 pb-12  opacity-100 max-h-[90vh]' : 'max-h-0'}`}>
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
                ${showId === 'discover' ? 'order-first mt-12 pt-12 pb-12  opacity-100 max-h-[90vh]' : 'max-h-0'}`}>
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
                ${showId === 'shop' ? 'order-first mt-12 pt-12 pb-12 opacity-100 max-h-[90vh]' : 'max-h-0'}`}>
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