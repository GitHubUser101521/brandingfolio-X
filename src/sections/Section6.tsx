import { useEffect, useRef } from "react"
import { Button, Pages, UtilityPages, FollowUs } from "../components/Components"
import { animScale, groupStagger } from "../utils/gsapAnim"

function Section6() {
    const buttonRef = useRef(null)
    const logoRef = useRef(null)

    useEffect(() => {
        groupStagger('.stagger5', 0.1)
    })

    return (
        <div className="my-bg-black p-40 pt-30 pb-40 flex flex-col gap-28">
            <div className="grid grid-cols-2 w-full bg-white rounded-2xl p-16 pr-0 relative gap-8 stagger5">
                <div className="flex flex-col gap-4">
                    <p className="text-4xl font-bold stagger5">Contact us today!</p>
                    <p className="text-lg font-light stagger5">Nunc tortor aliquam nec sed nunc convallis tincidunt quam felis volutpat ut consequat turpis risus lacus hendrerit.</p>
                </div>

                <div className="relative">
                    <img src="/footer.png" className="-my-16"/>
                    <div className="center-with-absolute">
                        <Button bgColor="black" text="Contact us" />
                        <Button bgColor="white" text="Our projects" />
                    </div>
                </div>
            </div>

            <div className="flex gap-16">
                <div className="flex flex-col gap-16 text-white w-2/6 stagger5">
                    <div>
                        <img 
                            src="/brandingfolioX-white-logo.svg" 
                            alt="Brandingfolio X" 
                            ref={logoRef}
                            onMouseEnter={() => animScale(logoRef.current, 0.9)}
                            onMouseLeave={() => animScale(logoRef.current, 1)}
                        />

                        <p className="mt-4">
                            Copyright © Brandingfolio X | Designed by <a href="https://brixtemplates.com/" target="_blank" className="underline">BRIX Templates </a> - Powered by <a href="https://webflow.com/" className="underline">Webflow</a>
                        </p>
                    </div>

                    <div>
                        <p className="font-bold text-xl">Subscribe to our newsletter</p>
                        <br />
                        
                        <div className="bg-white p-2 rounded-full flex justify-between">
                            <input 
                                type="text" 
                                placeholder="Enter your email"
                                className="bg-white text-black text-lg outline-none border-none pl-4 rounded-3xl"
                            />
                            <button 
                                className="bg-black border border-black p-7 py-3 text-lg rounded-full w-fit text-white cursor-pointer"
                                ref={buttonRef}
                                onMouseEnter={() => animScale(buttonRef.current, 0.9)}
                                onMouseLeave={() => animScale(buttonRef.current, 1)}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <Pages />

                <UtilityPages />

                <FollowUs />
            </div>
        </div>
    )
}

export default Section6
