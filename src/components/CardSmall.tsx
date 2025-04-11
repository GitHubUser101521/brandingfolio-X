type CardSmallType = {
    imgUrl: string,
    text: string
}

function CardSmall({ imgUrl, text }: CardSmallType) {
    return (
        <div className="border border-black rounded-3xl flex flex-col">
            <div className="border-b border-black rounded-t-2xl">
                <img 
                    src={imgUrl} 
                    alt={text}
                    className="w-full rounded-t-2xl" 
                />
            </div>
            <div className="flex justify-center items-center bg-white rounded-b-3xl">
                <p className="font-bold text-xl py-8">{ text }</p>
            </div>
        </div>
    )
}

export default CardSmall
