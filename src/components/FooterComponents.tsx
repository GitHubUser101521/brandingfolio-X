function Pages() {
    const pages = [
        "Preview",
        "Blog category",
        "Home V1",
        "Packages",
        "Home V2",
        "Packages single",
        "Home V3",
        "Contact v1",
        "About",
        "Contact v2",
        "Blog V1",
        "Contact v3",
        "Blog V2",
        "Portfolio",
        "Blog V3",
        "Portfolio Single",
        "Blog post",
        "Team member"
    ]

    return (
        <div className='flex flex-col gap-6 w-2/6 text-white text-lg stagger5'>
            <p className='font-bold'>Pages</p>
            <div className='grid grid-cols-2'>
                {
                    pages.map(p => (
                        <p className='mb-4 font-light'>{ p }</p>
                    ))
                }
            </div>
        </div>
    )
}

function UtilityPages() {
    const utilsPages = [
        "Style guide",
        "Start here",
        "404 Not found",
        "Password protected",
        "Licenses",
        "Changelog",
    ]

    return (
        <div className='flex flex-col gap-6 w-1/6 text-white text-lg stagger5'>
            <p className='font-bold'>Utility pages</p>
            <div>
                {
                    utilsPages.map(p => (
                        <p className='mb-4 font-light'>{ p }</p>
                    ))
                }
                <p className="underline"><a href="https://brixtemplates.com/">More Webflow Template</a></p>
            </div>
        </div>
    )
}

function FollowUs() {
    const socials = [
        "facebook",
        "twitter",
        "instagram",
        "linkedIn",
        "youtube"
    ]

    return (
        <div className='flex flex-col gap-6 w-1/6 text-white text-lg stagger5'>
            <p className='font-bold'>Follow us</p>
            <div className="flex flex-col gap-4">
                {
                    socials.map(p => (
                        <div className="flex gap-2 items-center">
                            <img src={`/${p}.png`} className="w-4"/>
                            <p className='font-light'>{ p.slice(0, 1).toUpperCase() + p.slice(1, p.length) }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { Pages, UtilityPages, FollowUs }
