import { useEffect } from 'react'
import { CardLargeTransparentType } from '../components/CardLargeTransparent'
import { CardLargeTransparent, Section5Card } from '../components/Components'
import { Section5CardType } from '../components/Section5Card'
import { animOpacity, animScale, groupStagger } from '../utils/gsapAnim'

function Section5() {
    const cards: CardLargeTransparentType[] = [
        {
            imgUrl: '/section5-1.png',
            imgPosition: 'right',
            header: '3 Headers and Footers',
            text: 'With a total of 3 different headers and footers, you can easily customize the Brandingfolio X Webflow Template to fit your company needs and requirements.',
            buttonBgColor: 'black',
            buttonText: 'Buy template',
            index: 1
        },
        {
            imgUrl: '/section5-2.png',
            imgPosition: 'left',
            header: '3 Notification Bars',
            text: 'If you are looking to get more sales, use one of our 3 notification bars included in the Brandingfolio X Webflow Template, and start promoting your products or services.',
            buttonBgColor: 'black',
            buttonText: 'Buy template',
            index: 2
        },
        {
            imgUrl: '/section5-3.png',
            imgPosition: 'right',
            header: 'Custom Icon Set',
            text: `The Brandingfolio X Webflow Template includes 3 sets of custom icons (rounded, square and filled), so you can easily use more icon fonts in your template.       
            No matter if you are looking to add another social media icon in the footer, or change the cart icon in the header, we got you covered`,
            buttonBgColor: 'black',
            buttonText: 'Buy template',
            index: 3
        },
        {
            imgUrl: '/section5-4.png',
            imgPosition: 'left',
            header: 'Social Media Assets',
            text: `Our Brandingfolio X Webflow Template Figma file includes a collection of social media covers that match with the Webflow Template design (for Facebook, Twitter and LinkedIn), so you can easily edit, customize, and use them for your own social media profiles.`,
            buttonBgColor: 'black',
            buttonText: 'Buy template',
            index: 4
        },
        {
            imgUrl: '/section5-5.png',
            imgPosition: 'right',
            header: 'Email Signature',
            text: `Our Brandingfolio X Webflow Template Figma file includes 2 custom email signature templates that match with the Webflow template, and you can use them to impress your customers with an amazing email signature.`,
            buttonBgColor: 'black',
            buttonText: 'Buy template',
            index: 5
        }
    ]

    const verticalCards: Section5CardType[] = [
        {
            bgColor: 'blue',
            textColor: 'white',
            header: 'Buy now on Webflow',
            text: 'Get the brandingfolio X Webflow Template today, and take your website design to the next level.',
            btnColor: 'black',
            btnBgColor: 'white',
            btnText: 'Buy template',
            imgUrl: '/section5-vertical-1.png',
            logoUrl: '/webflow-logo.svg'
        },
        {
            bgColor: 'white',
            textColor: 'black',
            header: 'Browse all templates',
            text: 'Looking for more templates? Brwose our collection of 100+ Webflow Templates on BRIXTemplates.com',
            btnColor: 'white',
            btnBgColor: 'purple',
            btnText: 'Explore more templates',
            imgUrl: '/section5-vertical-2.png',
            logoUrl: '/purple-logo-compact.svg'
        }
    ]

    useEffect(() => {
        cards.forEach((_, index) => {
            groupStagger(`.tranparent-card-stagger-${index}`, 0.3)
        })

        const Section5Card = document.querySelectorAll('.stagger4')

        Section5Card.forEach(s => {
            groupStagger('.stagger4', 0.3)
            animOpacity(s, 0, 1)

            s.addEventListener('mouseenter', () => animScale(s, 0.95))
            s.addEventListener('mouseleave', () => animScale(s, 1))
        })
    }, [])

    return (
        <div className="p-40 pb-0 my-bg-gray relative">
            <h1 className="title w-5/7 mx-auto anim-up">
                The Brandingfolio X Webflow Template also comes with more surprises...
            </h1>

            <div className="mt-16 flex flex-col gap-12 pb-120">
            {
                cards.map(c => (
                    <CardLargeTransparent {...c} key={c.imgUrl} />
                ))
            }
            </div>

            <div className="bg-white h-screen w-[calc(100% + 10rem)] -mx-40">
                <div className='flex justify-center px-45 gap-8 pb-40'>
                    {
                        verticalCards.map(v => (
                            <Section5Card {...v} key={v.imgUrl} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section5
