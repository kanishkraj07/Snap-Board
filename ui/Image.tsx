"use client"

interface MyImageProps {
    imgUrl?: string;
}

const MyImage = ({imgUrl} : MyImageProps) => {
    return <div className={'cursor-pointer text-center text-primary-slate bg-gray-700 size-40 rounded-full'}>
        <img className="size-40 rounded-full object-cover shadow-md" src={imgUrl} alt="image"></img>
    </div>
}

export default MyImage;