import { useEffect } from 'react'
import { Button, CardSmall } from '../components/Components'
import { groupStagger } from '../utils/gsapAnim'

function Section4() {
    const cards = [
        '404 Not found',
        'Password protected'
    ]

    useEffect(() => {
        groupStagger('.stagger3', 0.3)
    }, [])

    return (
        <div className="p-40">
            <div className="flex flex-col items-center gap-8 mb-8">
                <h1 className="title stagger3">
                    Utility pages
                </h1>

                <p className="text-center text-lg stagger3">
                    Take a look at the utility pages included in the Brandingfolio X Template.
                </p>
            </div>

            <div className="flex justify-center gap-6 mt-6">
            {
                cards.slice(cards.length - 2, cards.length).map((c, index) => (
                    <div className="w-1/3 fade-in" key={c}>
                        <CardSmall imgUrl={`/section4-${index + 1}.png`} text={c}/>
                    </div>
                ))
            }
            </div>

            <div className="flex justify-center mt-16">
                <Button bgColor="black" text="Buy template"/>
            </div>
        </div>
    )
}

export default Section4
