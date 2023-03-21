import { useCreateImagesQuery } from '../../Redux/APIs/OpenaiApi';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsImages } from 'react-icons/bs';
import { OpenaiApi } from '../../Redux/APIs/OpenaiApi';
const ImagesPreview = () => {
    const [skip, setSkip] = useState(true);
    const { msg } = useSelector(state => state.Data);
    const dispatch = useDispatch()
    const { data, isFetching, isError, error } = useCreateImagesQuery(msg, { skip });
    useEffect(() => {
        if (msg) {
            setSkip(false)
        }
    }, [msg])
    const FetchImages = () => {
        return (
            <div className='w-full h-96 rounded-lg bg-gray-300 text-gray-500 animate-pulse flex justify-center items-center'>
                <BsImages size={50} />
            </div>
        )
    }
    const HandleMoreImages = async () => {
        const t = dispatch(
            OpenaiApi.endpoints.CreateMorwImages.initiate(msg)
        );
        console.log(t)
    }
    return (
        <>
            <div className='container max-w- md:p-5 pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {isFetching ?
                    <>
                        <FetchImages />
                        <FetchImages />
                        <FetchImages />
                        <FetchImages />
                    </>
                    : isError ? <p className='text-lg font-medium text-red-500 col-span-4'>{error?.data?.msg}</p> :
                        data?.map((image, index) => (
                            <img key={index} src={image.url} className='rounded-lg' alt='' />
                        ))}
            </div>
            {(data?.length > 0 && data?.length !== 8) &&
                <button className=' flex justify-center w-full p-5'>
                    <div onClick={HandleMoreImages} className='bg-blue-500 text-white p-3 md:px-8 rounded-xl absolute active:scale-90 duration-200 whitespace-nowrap'>Load More</div>
                </button>
            }
        </>
    )
}

export default ImagesPreview
