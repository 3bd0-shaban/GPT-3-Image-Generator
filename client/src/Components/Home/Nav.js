import { BsHouseExclamation, BsImages } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { OpenaiApi } from '../../Redux/APIs/OpenaiApi';

const Nav = () => {
    const dispatch = useDispatch();
    const { msg } = useSelector(state => state.Data)
    const HandleMoreImages = async () => {
        dispatch(
            OpenaiApi.endpoints.CreateMorwImages.initiate(msg)
        );
    }


    return (
        <div className='flex gap-4 text-gray-400 text-lg font-medium container max-w-6xl py-5'>
            <button className='rounded-full hover:bg-gray-100 hover:text-black flex items-center gap-3 px-3 py-2'>
                <BsHouseExclamation size={20} />
                <p>Home</p>
            </button>
            <button className='rounded-full hover:bg-gray-100 hover:text-black flex items-center gap-3 px-3 py-2'>
                <BsImages size={20} />
                <p>Variations</p>
            </button>
            <button
                onClick={HandleMoreImages}
                className='rounded-full hover:bg-gray-100 hover:text-black flex items-center gap-3 px-3 py-2'>
                <BsImages size={20} />
                <p>Load More</p>
            </button>
        </div>
    )
}

export default Nav
