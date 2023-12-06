import HeroSection from './components/HeroSection'

const modelY =  { title: 'Model Y', subtitle: 'Lease starting at $399/mo', videoUrl: '/homepage/homepage-modelY.mp4',
  posterUrl: '/homepage/homepage-modelY-poster.avif', button1: 'Order Now', button2: 'Demo Drive', buttonColor: 'dark', color: 'white',
  bottomParagraph:' *Excludes taxes and fees with price subject to change. Available in select states. See Details' 
}
const model3 =  { title: 'Model 3', subtitle: 'Lease starting at $329/mo', imageUrl: '/homepage/homepage-model3.avif', 
  button1: 'Order Now', button2: 'Demo Drive', buttonColor: 'light', color: 'white',
  bottomParagraph:' *Excludes taxes and fees with price subject to change. Available in select states. See Details' 
}
const modelX =  { title: 'Model X', subtitle: 'From $68,590*', paragraph: 'After Federal Tax Credit & Est. Gas Savings',
  button1: 'Order Now', button2: 'Demo Drive', imageUrl: '/homepage/homepage-modelX.avif', buttonColor: 'light', color: 'black',
  bottomParagraph:' *Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change. Learn about est. gas savings.' 
}
const modelS =  { title: 'Model S', subtitle: 'From $71,090*', paragraph: 'After Est. Gas Savings',
  button1: 'Order Now', button2: 'Demo Drive', imageUrl: '/homepage/homepage-modelS.jpg', buttonColor: 'light', color: 'black',
  bottomParagraph:'*Price before savings is $74,990, excluding taxes and fees. Subject to change. Learn about est. gas savings.' 
}
const cybertruck = { imageUrl: '/homepage/homepage-cybertruck.avif', button1: 'Order Now', button2: 'Learn More', 
  buttonColor: 'light', color: 'black'
}
const demoDrive = { title: 'Experience Tesla', paragraph: 'Schedule a Demo Drive Today', videoUrl: '/homepage/homepage-demoDrive.webm',
  posterUrl: '/homepage/demoDrive-poster.avif', button1: 'Demo Drive', buttonColor: 'clear', color: 'white'
}


export default function Home() {
  return (
    <main className=' snap-y snap-mandatory relative h-screen overflow-auto'>
     
      <HeroSection title={modelY.title} subtitle={modelY.subtitle} bottomParagraph={modelY.bottomParagraph} videoUrl={modelY.videoUrl} 
        posterUrl={modelY.posterUrl} button1={modelY.button1} button2={modelY.button2} buttonColor={modelY.buttonColor} color={modelY.color} />

      <HeroSection title={model3.title} subtitle={model3.subtitle} bottomParagraph={model3.bottomParagraph}  imageUrl={model3.imageUrl}
        button1={model3.button1} button2={model3.button2} buttonColor={model3.buttonColor}  color={model3.color} />

      <HeroSection title={modelX.title} subtitle={modelX.subtitle} paragraph={modelX.paragraph} bottomParagraph={modelX.bottomParagraph} 
        imageUrl={modelX.imageUrl} button1={modelX.button1} button2={modelX.button2} buttonColor={modelX.buttonColor}  color={modelX.color} />

      <HeroSection title={modelS.title} subtitle={modelS.subtitle} paragraph={modelS.paragraph} bottomParagraph={modelS.bottomParagraph} 
        imageUrl={modelS.imageUrl} button1={modelS.button1} button2={modelS.button2} buttonColor={modelS.buttonColor}  color={modelS.color} />

      <HeroSection imageUrl={cybertruck.imageUrl} button1={cybertruck.button1} button2={cybertruck.button2} buttonColor={cybertruck.buttonColor} 
        color={cybertruck.color} />

      <HeroSection title={demoDrive.title} paragraph={demoDrive.paragraph} videoUrl={demoDrive.videoUrl} posterUrl={demoDrive.posterUrl}
        button1={demoDrive.button1} buttonColor={demoDrive.buttonColor}  color={demoDrive.color} />
    </main>
  )
}
