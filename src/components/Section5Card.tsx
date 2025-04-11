export type Section5CardType = {
    bgColor: string,
    textColor: 'black' | 'white',
    header: string,
    text: string,
    btnColor: string,
    btnBgColor: string
    btnText: string,
    imgUrl: string,
    logoUrl: string
}

function Section5Card({ bgColor, textColor, header, text, btnColor, btnBgColor, btnText, imgUrl, logoUrl }: Section5CardType) {
    return (
        <div className={`bg-${bgColor} w-full rounded-3xl -mt-60 border border-black overflow-hidden stagger4`}>
            <div className="flex flex-col gap-6 p-12">
                <div className="border border-black rounded-3xl w-fit p-4 bg-white">
                    <img src={logoUrl} alt={logoUrl} className="w-full"/>
                </div>

                <p className={`font-bold text-4xl text-${textColor}`}>{ header }</p>

                <p className={`text-lg text-${textColor}`}>{ text }</p>

                <button className={`bg-${btnBgColor} text-${btnColor} w-full rounded-full py-6 font-bold text-lg`}>
                    { btnText }
                </button>
            </div>
            <div className={`w-2/1`}>
                <img src={imgUrl} className="-mx-[30%] -mp-[10%]"/>
            </div>
        </div>
    )
}

export default Section5Card
