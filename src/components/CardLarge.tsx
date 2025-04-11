import Button from "./Button"

export type CardLargeType = {
    imgUrl: string,
    imgPosition: 'left' | 'right',
    logoUrl: string,
    header: string,
    text: string,
    buttonBgColor: 'black' | 'white',
    buttonText: string
}

function CardLarge({ imgUrl, imgPosition, logoUrl, header, text, buttonBgColor, buttonText }: CardLargeType) {
    return (
        <div className={`w-full flex ${imgPosition === 'right' ? 'flex-row-reverse' : ''} items-center border border-black rounded-3xl anim-up`}>
            <div>
                <img 
                    src={imgUrl} 
                    alt={header} 
                    className={`${imgPosition === "right" ? 'rounded-e-3xl' : 'rounded-l-3xl'}`}
                />
            </div>

            <div className="flex flex-col gap-6 px-16 w-6/7">
                <img 
                    src={logoUrl} 
                    alt={logoUrl} 
                    className="w-10"
                />

                <p className="text-3xl font-bold">{ header }</p>

                <p className="text-lg">{ text }</p>

                <Button bgColor={buttonBgColor} text={buttonText} />
            </div>
        </div>
    )
}

export default CardLarge
