import { useEffect } from 'react'
import { Button } from '../components/Components'
import { groupStagger } from '../utils/gsapAnim'

function Section1() {
    useEffect(() => {
        groupStagger('.stagger2', 0.3)
    })

    return (
        <div className="h-screen relative flex justify-between">
            <div className='flex flex-col justify-center px-40'>
                <h1 className="font-medium text-7xl stagger2">
                    Brandingfolio X 
                    <br />
                    Webflow Template
                </h1>

                <p className='w-5/7 break-words mt-4 text-lg stagger2'>Presenting Brandingfolio X, the ultimate Branding Agency Webflow Template.</p>

                <div className='flex gap-4 mt-8'>
                    <Button bgColor='black' text='Buy template'/>
                    <Button bgColor='white' text='Explore pages'/>
                </div>
            </div>

            <div className="my-bg-black h-full w-1/3">
                
            </div>
        </div>
    )
}

export default Section1
