import { useEffect, useRef } from 'react'
import { animScale } from '../utils/gsapAnim'
import gsap from 'gsap'

function Header() {
    const logoRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {

        const fadeAwayEl = document.querySelectorAll('.fade-away')

        fadeAwayEl.forEach(f => {
            f.addEventListener('mouseenter',
                () => {
                    gsap.to(f,
                        {
                            opacity: 0.5
                        }
                    )
                }
            )

            f.addEventListener('mouseleave',
                () => {
                    gsap.to(f,
                        {
                            opacity: 1
                        }
                    )
                }
            )
        })

        return () => gsap.killTweensOf(fadeAwayEl)
    }, [])

    return (
        <div className="bg-white grid grid-cols-2 gap-12 py-8 px-40">
            <div className="flex gap-12">
                <img 
                    src="/brandingfolioX-logo.svg" 
                    alt="Brandingfolio X" 
                    className="max-w-60"
                    ref={logoRef}
                    onMouseEnter={() => animScale(logoRef.current, 0.9)}
                    onMouseLeave={() => animScale(logoRef.current, 1)}
                />

                <div className="flex gap-8 text-lg items-center">
                    <p 
                        className='fade-away cursor-pointer'
                    >
                        Home
                    </p>
                    <p 
                        className='fade-away cursor-pointer'
                    >
                        About
                    </p>
                    <p 
                        className='fade-away cursor-pointer'
                    >
                        Blog
                    </p>
                    <select className='fade-away'>
                        <option>Pages</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-lg fade-away cursor-pointer">{'Cart (0)'}</p>

                <button 
                    className="bg-black text-white font-bold rounded-full p-4 px-6"
                    ref={buttonRef}
                    onMouseEnter={() => animScale(buttonRef.current, 0.9)}
                    onMouseLeave={() => animScale(buttonRef.current, 1)}
                >
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Header
