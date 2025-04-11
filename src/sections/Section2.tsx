import { useEffect } from "react"
import { CardLargeType } from "../components/CardLarge"
import { Button, CardLarge, CardSmall } from "../components/Components"
import { groupStagger } from "../utils/gsapAnim"

function Section2() {
    const cardsSmall = [
        '19+ Pages',
        '35+ Sections',
        '25+ Styles & Symbols'
    ]

    const cardsLarge: CardLargeType[] = [
        {
            imgUrl: '/section2-CardLarge-1.png',
            imgPosition: 'right',
            logoUrl: '/figma-logo.svg',
            header: 'Figma file included',
            text: 'Send us an email to brandingfoliox@brixtemplates.com with your purchase receipt, and we will send you the editable Figma file for the Brandingfolio X template.',
            buttonBgColor: 'white',
            buttonText: 'Request figma file'
        },
        {
            imgUrl: '/section2-CardLarge-2.png',
            imgPosition: "left",
            logoUrl: '/purple-logo.svg',
            header: 'Looking for more amazing Webflow Templates?',
            text: 'Take a look at our collection of 100+ premium Webflow Templates at BRIX Templates.',
            buttonBgColor: 'white',
            buttonText: 'Browse templates'
        }
    ]

    useEffect(() => {
        groupStagger('.stagger1', 0.2)
    }, [])

    return (
        <div className="p-40">
            <div className="flex flex-col items-center gap-8 mb-8">
                <h1 className="title anim-up">
                    What is included in 
                    <br />
                    Brandingfolio X
                </h1>

                <p className="text-center text-lg w-1/3">
                    <span className="font-medium">Brandingfolio X Webflow </span> 
                    Template includes over  
                    <span className="font-medium"> 19 pages </span> 
                    in total, with more than 
                    <span className="font-medium"> 35 sections.</span>
                </p>
            </div>

            <div className="flex flex-col gap-6">

                <div className="grid grid-cols-3 gap-6">
                {
                    cardsSmall.map((c, index) => (
                        <div key={index} className="stagger1">
                            <CardSmall imgUrl={`/section2-${index + 1}.png`} text={c} />
                        </div>
                    ))
                }
                </div>

                <>
                {
                    cardsLarge.map(c => (
                        <CardLarge {...c} key={c.imgUrl}/>
                    ))
                }
                </>

            </div>

            <div className="flex justify-center mt-16">
                <Button bgColor="black" text="Buy template"/>
            </div>
        </div>
    )
}

export default Section2
