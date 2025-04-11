import Button from "./Button"

export type CardLargeTransparentType = {
    imgUrl: string,
    imgPosition: 'left' | 'right',
    header: string,
    text: string,
    buttonBgColor: 'black' | 'white',
    buttonText: string,
    index: number
}

function CardLargeTransparent({ imgUrl, imgPosition, header, text, buttonBgColor, buttonText, index }: CardLargeTransparentType) {
    return (
        <div className={`w-full flex ${imgPosition === 'right' ? 'flex-row-reverse' : ''} items-center justify-between rounded-3xl anim-up`}>
            <div className={`tranparent-card-stagger-${index}`}>
                <img 
                    src={imgUrl} 
                    alt={header} 
                    className="rounded-3xl border border-black"
                />
            </div>

            <div className={`flex flex-col gap-4 w-6/7 ${imgPosition === 'left' ? 'ml-20' : ''} tranparent-card-stagger-${index}`}>
                <p className="text-4xl font-bold">{ header }</p>

                <p className="text-lg w-5/6 mb-2 opacity-85">{ text }</p>

                <Button bgColor={buttonBgColor} text={buttonText} />
            </div>
        </div>
    )
}

export default CardLargeTransparent
