import { useRef } from "react"
import { animScale } from "../utils/gsapAnim"

type ButtonType = {
    bgColor: 'black' | 'white',
    text: string,
}

function Button({ bgColor, text }: ButtonType) {
    const buttonRef = useRef(null)
    
    return (
        <button 
            className={`bg-${bgColor} border border-black p-10 py-5 text-lg rounded-full w-fit ${bgColor === 'black' ? 'text-white font-bold' : ''} cursor-pointer anim-up`}
            ref={buttonRef}
            onMouseEnter={() => animScale(buttonRef.current, 0.9)}
            onMouseLeave={() => animScale(buttonRef.current, 1)}
        >
            { text }
        </button>
    )
}

export default Button
