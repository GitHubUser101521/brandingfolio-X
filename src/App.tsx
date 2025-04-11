import { useEffect } from 'react'
import { Header } from './components/Components'
import { Section1, Section2, Section3, Section4, Section5, Section6 } from './sections/Sections'
import { animateScrollTrigger, animOpacity } from './utils/gsapAnim'
import gsap from 'gsap'

function FixedOverlay() {
    return (
        <div className='w-full bg-[#4a3aff] flex gap-8 justify-center items-center text-white py-3 fixed bottom-0 z-10'>
            <span>Like Brandingfolio X Webflow Template? Get it today on the Webflow Marketplace</span>
            <button className='overlay-btn'>
                Buy now
            </button>
        </div>
    )
}

function App() {
    useEffect(() => {
        const up = document.querySelectorAll('.anim-up')
        const fadeIn = document.querySelectorAll('.fade-in')

        up.forEach(up => {
            animateScrollTrigger(up, 'up')
        })

        fadeIn.forEach(f => {
            animOpacity(f, 0, 1)
        })

        return () => gsap.killTweensOf([ up ])
    }, [])

    return (
        <>
            <FixedOverlay />   
            <Header /> 
            <Section1 /> 
            <Section2 />  
            <Section3 /> 
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}

export default App
