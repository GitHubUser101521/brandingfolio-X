import Button from "../components/Button"
import CardSmall from "../components/CardSmall"

function Section3() {
    const pages = [
        'Home V1',
        'Home V2',
        'Home V3',
        'About',
        'Blog V1',
        'Blog V2',
        'Blog V3',
        'Blog post',
        'Blog Category',
        'Team member',
        'Portfolio',
        'Portfolio single',
        'Packages',
        'Packages single',
        'Contact V1',
        'Contact V2',
        'Contact V3'
    ]

    return (
        <div className="my-bg-gray p-40">
            <div className="flex flex-col items-center gap-8 mb-8">
                <h1 className="title anim-up">
                    Main pages
                </h1>

                <p className="text-center text-lg anim-up">
                    Take a look at the main pages included in the Brandingfolio X Template.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-6">
                {
                    pages.slice(0, pages.length - 2).map((c, index) => (
                        <div key={c} className="anim-up">
                            <CardSmall imgUrl={`/section3-${index + 1}.png`} text={c} />
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
            {
                pages.slice(pages.length - 2, pages.length).map((c, index) => (
                    <div className="anim-up max-w-1/3" key={c}>
                        <CardSmall imgUrl={`/section3-${index + 10}.png`} text={c} />
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

export default Section3
// 